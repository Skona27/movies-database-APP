import React from "react";
import { theme } from "../../hooks/Theme";
import { IButtonVariant, IButtonVariantDefinition } from "./types";

interface IProps {
  text: string;
  type?: "submit";
  variant?: IButtonVariant;
  onClick?(): void;
}

const variants: { [key in IButtonVariant]: IButtonVariantDefinition } = {
  primary: {
    active: {
      color: theme.colors.white,
      backgroundColor: theme.colors.black,
      outlineColor: theme.colors.red
    },
    hover: {
      color: theme.colors.blue
    }
  },
  secondary: {
    active: {
      color: theme.colors.white,
      backgroundColor: theme.colors.red,
      outlineColor: theme.colors.black
    },
    hover: {
      color: theme.colors.black
    }
  },
  link: {
    active: {
      color: theme.colors.white,
      backgroundColor: "transparent",
      outlineColor: "none"
    },
    hover: {
      color: theme.colors.black
    }
  }
};

export const Button: React.FC<IProps> = React.memo(
  ({ text, variant, onClick, ...props }) => {
    const styles = variant ? variants[variant] : variants.primary;

    const buttonStyles = {
      width: "fit-content",
      border: "none",
      backgroundColor: styles.active.backgroundColor,
      color: styles.active.color,
      outlineColor: styles.active.outlineColor,
      padding: ".5rem 1.75rem",
      fontWeight: 500,
      letterSpacing: 1,
      fontSize: "1rem",
      transition: "color .15s ease-in",
      "&:hover": {
        cursor: "pointer",
        color: styles.hover.color
      }
    };

    return (
      <button type="submit" css={buttonStyles} onClick={onClick} {...props}>
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";
