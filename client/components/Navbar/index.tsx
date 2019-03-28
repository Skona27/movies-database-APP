import React from "react";
import {Wrapper} from "../Wrapper";
import {NavbarItem} from "./NavbarItem";

interface IProps {
}

export const Navbar: React.FC<IProps> = React.memo(() => {
  return (
    <Wrapper backgroundColor="#2c9efb">
      <header
        css={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <h1>moviesRestful Client</h1>

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
