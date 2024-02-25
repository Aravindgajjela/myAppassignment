import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/homePage" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
