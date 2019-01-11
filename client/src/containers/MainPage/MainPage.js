import React, {Component} from 'react';

import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainPage">
        <SearchBar />
        <MovieList />
        <Button value="Add new movie" style="primary" />
      </div>
    )
  }
}

export default MainPage;