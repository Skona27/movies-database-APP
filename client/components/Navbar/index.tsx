import React from "react";
import { Wrapper } from "../Wrapper";
import { NavbarItem } from "./NavbarItem";
import { useTheme } from "../../hooks/Theme";

interface IProps {}

export const Navbar: React.FC<IProps> = React.memo(() => {
  const { colors } = useTheme();

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
          <NavbarItem text="Search" href="/" type="search" />
          <NavbarItem text="Log in" href="/login" type="login" />
          <NavbarItem text="Register" href="#" type="register" />
        </ul>
      </header>
    </Wrapper>
  );
});

Navbar.displayName = "Navbar";
