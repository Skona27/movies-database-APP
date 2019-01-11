import React, {Component} from 'react';

class CreateForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainPage">
        <form className="form">
        <div className="form-group">
          <label for="title">Title:</label>
          <input type="text" className="form-control" id="title" placeholder="Title"/>
        </div>
        <div className="form-group">
          <label for="description">Description:</label>
          <textarea className="form-control" id="description" name="description" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label for="genre">Genre:</label>
          <input type="text" className="form-control" id="genre" placeholder="Genre"/>
        </div>
        <div className="form-group">
          <label for="director">Director:</label>
          <input type="text" className="form-control" id="director" placeholder="Director"/>
        </div>
        <div className="form-group">
          <label for="language">Language:</label>
          <input type="text" className="form-control" id="language" placeholder="Language"/>
        </div>
        <div className="form-group">
          <label for="year">Year:</label>
          <input type="number" className="form-control" id="year" placeholder="Year"/>
        </div>
        <div className="form-group">
          <label for="length">Length:</label>
          <input type="number" className="form-control" id="length" placeholder="Length"/>
        </div>
        <div className="form-group">
          <label for="rate">Rate:</label>
          <input type="number" step="0.1" className="form-control" id="rate" placeholder="Rate"/>
        </div>
        
        <button type="submit" className="btn btn-primary btn-lg">Add new movie</button>
      </form>
      </div>
    )
  }
}

export default CreateForm;