import React from "react";
import {Wrapper} from "../Wrapper";
import {NavbarItem} from "./NavbarItem";
import {useTheme} from "../../hooks/Theme";

interface IProps {
}

export const Navbar: React.FC<IProps> = React.memo(() => {
  const {colors} = useTheme();

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
            display: "flex"
          }}
        >
          <NavbarItem text="Search" href="#"/>
          <NavbarItem text="Log in" href="#"/>
          <NavbarItem text="Register" href="#"/>
        </ul>
      </header>
    </Wrapper>
  );
});
