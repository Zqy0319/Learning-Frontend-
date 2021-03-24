import React from "react";
import "./Styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


export default function CustomLinkExample() {
  return (
    <Router>
      <div>

        <ul>
          <li>
            <Link to="/pageA">page A</Link>
          </li>
          <li>
            <Link to="/pageB">page B</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/pageA">
            <PageA />
          </Route>
          <Route path="/pageB">
            <PageB />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function PageA() {
  return (
    <div>
      <h1>Page a</h1>
    </div>
  );
}

function PageB() {
  return (
    <div>
      <h2>Page b</h2>
    </div>
  );
}
