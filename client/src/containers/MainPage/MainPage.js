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
      links: null,
      jwt: null
    };

    this.changePage = this.changePage.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  async changePage(href) {
    try {
      let result;

      if(this.state.jwt) {
        result = await axios.get(href, { headers: {"Authorization" : `Bearer ${this.state.jwt}`} });
      } else {
        result = await axios.get(href);
      }
      this.setState({movies: result.data.data, links: result.data.links});
    } catch(err) {
      console.log(err);
    }
  }

  async searchMovie(movie) {
    console.log("SEARCHING MOVIE");
    try {
      let result;
      let href = `http://localhost:3001/api/movies?search=${movie}&perPage=4`

      if(this.state.jwt) {
        result = await axios.get(href, { headers: {"Authorization" : `Bearer ${this.state.jwt}`} });
      } else {
        result = await axios.get(href);
      }
      this.setState({movies: result.data.data, links: result.data.links});
    } catch(err) {
      console.log(err);
    }
  }

  loadButton() {
    let links = this.state.links;
    if (links) {
      const createBtn = links.filter(link => link.rel === "create");

      if(createBtn.length) {
        return <Button value="Add new movie" style="primary" />
      }
    }
  }

  async componentDidMount() {
    try {
      let result;
      
      if(this.state.jwt) {
        result = await axios.get("http://localhost:3001/api/movies?perPage=4", { headers: {"Authorization" : `Bearer ${this.state.jwt}`} });
      } else {
        result = await axios.get("http://localhost:3001/api/movies?perPage=4");
      }
        this.setState({movies: result.data.data, links: result.data.links});
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="mainPage">
        <SearchBar search={this.searchMovie} />
        <MovieList movies={this.state.movies} links={this.state.links} changePage={this.changePage}/>
        {this.loadButton()}
      </div>
    )
  }
}

export default MainPage;