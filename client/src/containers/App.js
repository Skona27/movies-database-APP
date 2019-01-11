import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import MainPage from "../containers/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact />
        </Switch>
      </div>
    );
  }
}

export default App;
