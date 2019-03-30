import React from "react";
import { useTheme } from "../../hooks/Theme";
import { IMovie } from "../types";

export const MovieCard: React.FC<IMovie> = React.memo(
  ({ title, description, genre, year, director, rate, links }) => {
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
          height: "38rem",
          marginLeft: "2rem",
          marginBottom: "2rem",
          padding: "1.75rem",
          borderRadius: 2,
          backgroundColor: colors.yellow,
          color: colors.black,
          fontWeight: 300,
          border: `1px solid ${colors.black}`,
          ...flexBetween,
          flexDirection: "column",      
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
              <p>{year}</p> marginBottom: ".25rem"
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
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <a
              href="#"
              css={{
                padding: ".5rem 1.25rem",
                backgroundColor: colors.blue,
                color: colors.white,
                textDecoration: "none",
                fontWeight: 600,
                transition: "all .1s ease-in",
                transitionProperty: "color, background-color",
                "&:hover": {
                  color: colors.black,
                  backgroundColor: colors.white,
                  cursor: "pointer"
                }
              }}
            >
              More details
            </a>
          </div>
        </div>
      </article>
    );
  }
);

MovieCard.displayName = "MovieCard";
