import React, { Component } from 'react';
import {Route, Switch, withRouter} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import MainPage from "../containers/MainPage/MainPage";
import CreateForm from './CreateForm/CreateForm';
import LoginPage from "../containers/LoginPage/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: null,
        name: null,
        token: null
      }
    }

    this.setUser = this.setUser.bind(this);
  }

  setUser(userData) {
    if (userData) {
      this.setState({user: {id: userData.id, name: userData.firstName, token: userData.token}});
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar name={this.state.user.name} />
        <Switch>
          <Route path="/" exact render={() => <MainPage token={this.state.user.token} />} />
          <Route path="/create" exact component={CreateForm} />
          <Route path="/login" exact render={() => <LoginPage setUser={this.setUser} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
