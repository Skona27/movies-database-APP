import React from "react";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { AppContext } from "../components/AppContext";
import { MovieCard } from "../components/MovieCard";

function Home() {
  const { searchResults } = React.useContext(AppContext);
  return (
    <>
      <Navbar />
      {searchResults && (
        <Wrapper padding="5rem 1rem">
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
                <MovieCard title={movie.title} />
              </li>
            ))}
          </ul>
        </Wrapper>
      )}
    </>
  );
}

export default Home;
