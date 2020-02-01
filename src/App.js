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
            <div className="navCell">
              <Link to="/fullStudies" className="navLink">
                Full Studies
              </Link>
            </div>
            <div className="navCell">
              <Link to="/studyFields" className="navLink">
                Study Fields
              </Link>
            </div>
            <div className="navCell">
              <Link to="/fieldValues" className="navLink">
                Field Values
              </Link>
            </div>
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
            <Route path="/fullStudies">
              <FullStudy />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
