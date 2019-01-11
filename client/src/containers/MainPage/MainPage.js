import React, {Component} from 'react';

import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

import axios from "axios";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      links: null
    };

    this.changePage = this.changePage.bind(this);
  }

  async changePage(href) {
    
    try {
      let result = await axios.get(href);
      console.log(result);
      this.setState({movies: result.data.data, links: result.data.links});
    } catch(err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      let result = await axios.get("http://localhost:3001/api/movies?perPage=4");
      this.setState({movies: result.data.data, links: result.data.links});
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="mainPage">
        <SearchBar />
        <MovieList movies={this.state.movies} links={this.state.links} changePage={this.changePage}/>
        <Button value="Add new movie" style="primary" />
      </div>
    )
  }
}

export default MainPage;