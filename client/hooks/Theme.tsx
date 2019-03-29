import React from "react";

export type IColor = "white" | "black" | "green" | "red" | "yellow" | "blue";

type IBreakpoint = "fromTablet" | "fromDesktop";

type IBreakpoints = { [Key in IBreakpoint]: string };

const breakpoints: IBreakpoints = {
  fromTablet: "@media (min-width: 768px)",
  fromDesktop: "@media (min-width: 992px)"
};

interface ITheme {
  colors: { [Key in IColor]: string };
  bp: IBreakpoints;
}

const theme: ITheme = {
  colors: {
    white: "#fbfbfb",
    black: "#1e272e",
    green: "#44bd32",
    red: "#e84118",
    yellow: "#fbc531",
    blue: "#00a8ff"
  },
  bp: breakpoints
};

const ThemeContext = React.createContext(theme);

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const Theme: React.FC = React.memo(({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
});

Theme.displayName = "Theme";
