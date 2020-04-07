import React from "react";
import "./App.scss";
import "./styles/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
