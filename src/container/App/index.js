import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Contextbar from "../../component/Contextbar";
import Datasets from "../../component/Datasets";
import Studio from "../../component/Studio";
import Stage from "../../component/Stage";
import Inspector from "../../component/Inspector";
import "./index.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="container_navbar">
              <Navbar />
            </div>
            <div className="container_content">
              <div className="container_content_main">
                <div className="container_content_main_contextBar">
                  <Contextbar />
                </div>
                <div className="container_content_main_mainPanel">
                  <Route exact path="/">
                    <Redirect to="/datasets" />
                  </Route>
                  <Route path="/datasets" component={Datasets} />
                  <Route path="/studio" component={Studio} />
                  <Route path="/stage" component={Stage} />
                </div>
              </div>
              <div className="container_content_inspector">
                <Inspector />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
