import React from "react";
import { Wrapper } from "../Wrapper";
import { NavbarItem } from "./NavbarItem";
import { useTheme } from "../../hooks/Theme";
import { AppContext } from "../AppContext";

interface IProps {}

export const Navbar: React.FC<IProps> = React.memo(() => {
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
            alignItems: "center"
          }}
        >
          <NavbarItem text="Search" href="/" type="search" />
          {!user && (
            <>
              <NavbarItem text="Log in" href="/login" type="login" />
              <NavbarItem text="Register" href="#" type="register" />
            </>
          )}
          {user && (
            <button
              css={{
                marginLeft: "2.5rem",
                padding: ".1rem",
                fontSize: "1.25rem",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: 1,
                transition: "color .15s ease-in",
                color: colors.white,
                border: "none",
                background: "none",
                "&:hover": {
                  cursor: "pointer",
                  color: colors.black
                }
              }}
              onClick={handleLogout}
            >
              Log out
            </button>
          )}
        </ul>
      </header>
    </Wrapper>
  );
});

Navbar.displayName = "Navbar";
