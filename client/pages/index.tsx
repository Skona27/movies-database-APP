import React from "react";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { AppContext } from "../components/AppContext";
import { MovieCard } from "../components/MovieCard";
import { Search } from "../components/Navbar/Search";

function Home() {
  const { searchResults } = React.useContext(AppContext);
  return (
    <>
      <Navbar />
      <Wrapper padding="1rem" backgroundColor="black">
        <Search />
      </Wrapper>
      {searchResults && (
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
            {searchResults.data.map(movie => (
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

export default Home;
