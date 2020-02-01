import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudyFields from "./components/StudyFields";
import FullStudy from "./components/FullStudy";
import FieldValues from "./components/FieldValues";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div id="navBar">
            <Link to="/" className="navLink">
              <div className="navCell">
                <p style={{ margin: "0px" }}>Full Studies</p>
              </div>
            </Link>
            <Link to="/studyFields" className="navLink">
              <div className="navCell">
                <p style={{ margin: "0px" }}>Study Fields</p>
              </div>
            </Link>
            <Link to="/fieldValues" className="navLink">
              <div className="navCell">
                <p style={{ margin: "0px" }}>Field Values</p>
              </div>
            </Link>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/studyFields">
              <StudyFields />
            </Route>
            <Route path="/fieldValues">
              <FieldValues />
            </Route>
            <Route path="/">
              <FullStudy />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
