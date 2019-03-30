import React from "react";
import { useTheme } from "../../hooks/Theme";

interface IProps {
  title: string;
}

export const MovieCard: React.FC<IProps> = React.memo(({ title }) => {
  const { colors } = useTheme();

  return (
    <article
      css={{
        width: "15.75rem",
        height: "20rem",
        marginLeft: "2rem",
        marginBottom: "2rem",
        padding: "1.75rem",
        borderRadius: 2,
        backgroundColor: colors.yellow,
        color: colors.black,
        fontSize: "1.25rem",
        fontWeight: 300
      }}
    >
      {title}
    </article>
  );
});

MovieCard.displayName = "MovieCard";
