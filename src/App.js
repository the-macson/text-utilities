import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextBox />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
