import React from "react";
import Link from "next/link";
import { useTheme } from "../../hooks/Theme";

interface IProps {
  wrapperCss?: {};
  href?: string;
}

export const A: React.FC<IProps> = React.memo(({ children, ...props }) => {
  const { colors } = useTheme();

  return (
    <Link {...props}>
      <a
        css={{
          width: "fit-content",
          padding: ".5rem 1.25rem",
          backgroundColor: colors.green,
          color: colors.white,
          textDecoration: "none",
          fontWeight: 500,
          transition: "color .15s ease-in",
          "&:hover": {
            color: colors.black,
            cursor: "pointer"
          }
        }}
      >
        {children}
      </a>
    </Link>
  );
});
