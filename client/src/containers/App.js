import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import MainPage from "../containers/MainPage/MainPage";
import CreateForm from './CreateForm/CreateForm';
import LoginPage from "../containers/LoginPage/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/create" exact component={CreateForm} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
