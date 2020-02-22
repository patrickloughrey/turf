const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("App is up and running!");
});

// User Routes
app.use("/api/users", require("./routes/api/users/users"));
app.use("/api/profile", require("./routes/api/users/profile"));
app.use("/api/auth", require("./routes/api/users/auth"));

// Host Routes
app.use("/api/hosts", require("./routes/api/hosts/hosts"));
app.use("/api/field", require("./routes/api/hosts/fields"));
app.use("/api/hostAuth", require("./routes/api/hosts/auth"));
app.use("/api/hostProfile", require("./routes/api/hosts/profile"));

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
