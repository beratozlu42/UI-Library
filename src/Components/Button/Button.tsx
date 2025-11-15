import React from "react";
import { theme } from "../Styles/theme";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const baseStyle: React.CSSProperties = {
    borderRadius: theme.borderRadius,
    fontFamily: theme.fontFamily,
    cursor: "pointer",
    padding:
      size === "sm"
        ? "8px 16px"
        : size === "md"
        ? "10px 20px"
        : "12px 24px",
    fontSize:
      size === "sm"
        ? "12px"
        : size === "md"
        ? "15px"
        : "16px",
    border: "none",
    transition: "all 0.2s ease-in-out",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: "white",
    },
    secondary: {
        backgroundColor: theme.colors.secondary,
        color: "black",
    },
    outline: {
      backgroundColor: "transparent",
      border: `1px solid ${theme.colors.primary}`,
      color: theme.colors.primary,
    },
  };

  return (
    <button
      className={`button button-${variant}`}
      style={{ ...baseStyle, ...variants[variant] }}
      {...props}
    >
      {children}
    </button>
  );
};
