import React from "react";
import { Wrapper } from "../Wrapper";
import { NavbarItem } from "./NavbarItem";
import { useTheme } from "../../hooks/Theme";
import { AppContext } from "../AppContext";
import { Button } from "../UI/Button";

export const Navbar: React.FC = React.memo(() => {
  const { colors } = useTheme();
  const { user, dispatch } = React.useContext(AppContext);

  const handleLogout = () => {
    dispatch({ type: "logoutUser" });
  };

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
            alignItems: "baseline"
          }}
        >
          <NavbarItem text="Search" href="/" type="search" />
          {!user && (
            <>
              <NavbarItem text="Log in" href="/login" type="login" />
              <NavbarItem text="Register" href="/register" type="register" />
            </>
          )}
          {user && (
            <Button
              text="Log out"
              variant="link"
              onClick={handleLogout}
              css={{ marginLeft: "2.5rem", fontSize: "1.25rem" }}
            />
          )}
        </ul>
      </header>
    </Wrapper>
  );
});

Navbar.displayName = "Navbar";
