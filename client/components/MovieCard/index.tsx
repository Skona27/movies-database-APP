import React from "react";
import { useTheme } from "../../hooks/Theme";
import { IMovie } from "../types";
import { Button } from "../UI/Button";
import { A } from "../UI/A";

export const MovieCard: React.FC<IMovie> = React.memo(
  ({ id, title, description, genre, year, director, rate, links }) => {
    const { colors } = useTheme();

    const flexBetween = {
      display: "flex",
      justifyContent: "space-between"
    };

    const h4Styles = {
      fontWeight: 400,
      margin: ".5rem 0 0 0",
      padding: ".5rem 0 .25rem 0"
    };

    return (
      <article
        css={{
          width: "19.25rem",
          height: "40rem",
          marginLeft: "2rem",
          marginBottom: "2rem",
          padding: "1.75rem",
          borderRadius: 2,
          backgroundColor: colors.yellow,
          color: colors.black,
          fontWeight: 300,
          border: `1px solid ${colors.black}`,
          ...flexBetween,
          flexDirection: "column"
        }}
      >
        <div>
          <h3
            css={{
              color: colors.black,
              fontSize: "1.5rem",
              fontWeight: 400,
              letterSpacing: 1,
              textAlign: "center",
              paddingBottom: "1rem",
              marginBottom: ".5rem",
              borderBottom: `2px dashed ${colors.blue}`
            }}
          >
            {title}
          </h3>

          <h4 css={h4Styles}>Description:</h4>
          <p
            css={{
              paddingBottom: "1.5rem",
              borderBottom: `2px dashed ${colors.blue}`
            }}
          >
            {description.substr(0, 100)}...
          </p>

          <div css={flexBetween}>
            <div>
              <h4 css={h4Styles}>Genre:</h4>
              <p>{genre}</p>
            </div>
            <div>
              <h4 css={h4Styles}>Year:</h4>
              <p>{year}</p>
            </div>
          </div>

          <div css={flexBetween}>
            <div>
              <h4 css={h4Styles}>Director:</h4>
              <p>{director}</p>
            </div>
          </div>
        </div>
        <div>
          <p
            css={{
              fontWeight: 400,
              fontSize: "2rem",
              textAlign: "right",
              color: colors.black,
              marginTop: ".5rem"
            }}
          >
            {rate}
          </p>

          <div
            css={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {links.map(link => {
              switch (link.rel) {
                case "self":
                  return <A href={`/movie/${id}`}>More details</A>;
                case "update":
                  break;
                case "delete":
                  return (
                    <Button
                      variant="secondary"
                      text="Delete"
                      css={{ marginTop: ".5rem" }}
                    />
                  );
                default:
                  break;
              }
            })}
          </div>
        </div>
      </article>
    );
  }
);

MovieCard.displayName = "MovieCard";
