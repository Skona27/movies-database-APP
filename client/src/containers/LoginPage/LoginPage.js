import React, {Component} from 'react';

class CreateForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainPage">
        <form className="form">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password:</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-submit">Login</button>
      </form>
      </div>
    )
  }
}

export default CreateForm;