import React from "react";
import { Wrapper } from "../Wrapper";
import { NavbarItem } from "./NavbarItem";
import { useTheme } from "../../hooks/Theme";
import { Search } from "./Search";
import { AppContext } from "../AppContext";

interface IProps {}

export const Navbar: React.FC<IProps> = React.memo(() => {
  const { colors } = useTheme();
  const { searchResults } = React.useContext(AppContext);
  console.log(searchResults.data);

  return (
    <Wrapper padding="2rem 1rem" backgroundColor="blue">
      <header
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1
          css={{
            fontWeight: 400,
            letterSpacing: 1,
            color: colors.white
          }}
        >
          moviesRestful Client
        </h1>

        <ul
          css={{
            listStyleType: "none",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Search />
          <NavbarItem text="Log in" href="#" />
          <NavbarItem text="Register" href="#" />
        </ul>
      </header>
    </Wrapper>
  );
});

Navbar.displayName = "Navbar";
