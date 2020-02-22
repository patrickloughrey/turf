import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Layout/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HostRegister from "./components/Auth/HostRegister";
import Choice from "./components/Auth/Choice";
import ChoiceLogin from "./components/Auth/ChoiceLogin";
import HostLogin from "./components/Auth/HostLogin";
import Alert from "./components/Layout/Alert";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser, loadHost } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    store.dispatch(loadHost());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={LandingPage} />
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/choice' component={Choice} />
          <Route exact path='/choiceLogin' component={ChoiceLogin} />
          <Route exact path='/registerHost' component={HostRegister} />
          <Route exact path='/loginHost' component={HostLogin} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
