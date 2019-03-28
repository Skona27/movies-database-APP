import React from "react";
import Link from "next/link";

interface IProps {
  text: string;
  href: string;
}

export const NavbarItem: React.FC<IProps> = React.memo(({text, href}) => {
  return (
    <li
      css={{
        margin: ".5rem"
      }}
    >
      <Link href={href}>
        <a
          css={{
            padding: ".25rem .75rem",
            backgroundColor: "#ccc",
            textDecoration: "none",
            "&:hover": {
              cursor: "pointer"
            }
          }}
        >
          {text}
        </a>
      </Link>
    </li>
  );
});
