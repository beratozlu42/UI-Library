import React from "react";
import styles from "./index.module.css";

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  label?: string;
  error?: string;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
  autoFocus?: boolean;
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "text",
  label,
  error,
  className,
  id,
  name,
  required = false,
  autoFocus = false,
  ...props
}) => {
  const variantClass =
    variant === "primary"
      ? styles["input-primary"]
      : variant === "secondary"
      ? styles["input-secondary"]
      : styles["input-outline"];
      
  const sizeClass =
    size === "sm"
      ? styles["input-sm"]
      : size === "md"
      ? styles["input-md"]
      : styles["input-lg"];
    
    const errorHandling = 
        type === "email"
            ? error: ""

  const inputClasses = [
    styles.input,
    variantClass,
    sizeClass,
    error && styles["input-error"],
    disabled && styles["input-disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        className={inputClasses}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

