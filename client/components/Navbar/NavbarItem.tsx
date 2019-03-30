import React from "react";
import Link from "next/link";
import { useTheme } from "../../hooks/Theme";
import { AppContext } from "../AppContext";
import { INavbarItem } from "../types";

interface IProps {
  text: string;
  href: string;
  type: INavbarItem;
}

export const NavbarItem: React.FC<IProps> = React.memo(
  ({ text, href, type }) => {
    const { colors } = useTheme();
    const { activeNavbar, dispatch } = React.useContext(AppContext);
    const isActive = activeNavbar === type;

    const handleLinkClick = (type: INavbarItem) => {
      dispatch({ type: "activeNavbar", payload: type });
    };

    return (
      <li
        css={{
          marginLeft: "2.5rem"
        }}
      >
        <Link href={href}>
          <a
            css={{
              padding: ".1rem",
              color: isActive ? colors.black : colors.white,
              fontSize: "1.25rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: 1,
              transition: "color .15s ease-in",
              "&:hover": {
                cursor: "pointer",
                color: colors.black
              }
            }}
            onClick={() => {
              handleLinkClick(type);
            }}
          >
            {text}
          </a>
        </Link>
      </li>
    );
  }
);

NavbarItem.displayName = "NavbarItem";
