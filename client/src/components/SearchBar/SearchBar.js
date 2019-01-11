import React, {Component} from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    }
  }

  render() {
    return (
      <form className="input-group mb-3 searchBar" onSubmit={(e) => {e.preventDefault(); this.props.search(this.state.search)}}>
        <input type="text" className="form-control" placeholder="Search a movie"
         onChange={(e) => {this.setState({search: e.target.value})}} value={this.state.search}/>
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
    )}
}

export default SearchBar;