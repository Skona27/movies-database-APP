import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";

class CreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "jujakubiak@gmail.com",
      password: "kubapijeherbatke",
    }

    this.loginUser = this.loginUser.bind(this);
  }

  async loginUser() {
    try {
      let result = await axios.post("http://localhost:3001/api/login", {
        email: this.state.email,
        password: this.state.password
      }, {'Content-Type': 'application/json'});

      this.props.setUser(result.data);
      return <Redirect to="/" />

    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="mainPage">
        <form className="form" onSubmit={(e) => {e.preventDefault(); this.loginUser()}}>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email"
           onChange={(e) => {this.setState({email: e.target.value})}} value={this.state.email}/>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" class="form-control" id="password" placeholder="Password"
            onChange={(e) => {this.setState({password: e.target.value})}} value={this.state.password} />
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-submit">Login</button>
      </form>
      </div>
    )
  }
}

export default CreateForm;