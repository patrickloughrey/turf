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

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/hosts", require("./routes/api/hosts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/field", require("./routes/api/fields"));

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
