import React from "react";
import Link from "next/link";
import {useTheme} from "../../hooks/Theme";

interface IProps {
  text: string;
  href: string;
}

export const NavbarItem: React.FC<IProps> = React.memo(({text, href}) => {
  const {colors} = useTheme();

  return (
    <li
      css={{
        "&:not(:first-of-type)": {
          marginLeft: "2.5rem"
        }
      }}
    >
      <Link href={href}>
        <a
          css={{
            padding: ".1rem",
            color: colors.white,
            fontSize: "1.25rem",
            fontWeight: 400,
            textDecoration: "none",
            letterSpacing: 1,
            transition: "color .1s ease-in",
            "&:hover": {
              cursor: "pointer",
              color: colors.black,
            }
          }}
        >
          {text}
        </a>
      </Link>
    </li>
  );
});
