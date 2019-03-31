import React from "react";
import { useTheme } from "../../hooks/Theme";

interface IProps {
  type: "text" | "password" | "email";
  placeholder: string;
  value: string;
  onChange?(event: unknown): void;
}

export const Input: React.FC<IProps> = React.memo(
  ({ type, placeholder, value, onChange, ...props }) => {
    const { colors } = useTheme();

    const inputStyle = {
      padding: ".5rem .75rem",
      width: "20rem",
      marginBottom: ".75rem",
      marginRight: "1.75rem",
      fontSize: "1rem",
      borderRadius: 2,
      border: "none",
      outlineColor: colors.black,
      color: colors.black,
      backgroundColor: colors.white
    };

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        css={inputStyle}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
