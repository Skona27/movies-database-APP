import React from "react";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { AppContext } from "../components/AppContext";
import { MovieCard } from "../components/MovieCard";
import { Search } from "../components/Navbar/Search";
import { AxiosResponse } from "axios";
import axios from "axios";
import { IMovie, ISearchResults } from "../components/types";

function Home(allMovies: ISearchResults) {
  const { searchResults } = React.useContext(AppContext);

  const movies: IMovie[] = searchResults ? searchResults.data : allMovies.data;

  return (
    <>
      <Navbar />
      <Wrapper padding="1.25rem 1rem" backgroundColor="black">
        <Search />
      </Wrapper>
      {movies && (
        <Wrapper padding="4rem 1rem">
          <ul
            css={{
              listStyleType: "none",
              display: "flex",
              flexWrap: "wrap",
              padding: 0,
              transform: "translateX(-1rem)"
            }}
          >
            {movies.map(movie => (
              <li key={movie.id}>
                <MovieCard {...movie} />
              </li>
            ))}
          </ul>
        </Wrapper>
      )}
    </>
  );
}

Home.getInitialProps = async () => {
  const response: AxiosResponse = await axios.get(
    `http://localhost:3004/api/movies`
    // `http://localhost:3004/api/movies`
  );
  const searchResults: ISearchResults = response.data;
  return { allMovies: searchResults };
};

export default Home;
