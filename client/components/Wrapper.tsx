import React from "react";
import { IColor, useTheme } from "../hooks/Theme";

interface IProps {
  backgroundColor?: IColor;
  padding: string;
}

export const Wrapper: React.FC<IProps> = ({
  backgroundColor = "white",
  padding = "0 1rem",
  children
}) => {
  const { colors } = useTheme();

  return (
    <section
      css={{
        backgroundColor: colors[backgroundColor],
        padding
      }}
    >
      <div
        css={{
          maxWidth: "85rem",
          margin: "0 auto"
        }}
      >
        {children}
      </div>
    </section>
  );
};
