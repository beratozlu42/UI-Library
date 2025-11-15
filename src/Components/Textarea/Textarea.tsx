import React from "react";
import styles from "./index.module.css";

type TextareaProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  label?: string;
  error?: string;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
  autoFocus?: boolean;
};

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  variant = "primary",
  size = "md",
  disabled = false,
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
      ? styles["textarea-primary"]
      : variant === "secondary"
      ? styles["textarea-secondary"]
      : styles["textarea-outline"];
    
    const sizeClass =
    size === "sm"
      ? styles["textarea-sm"]
      : size === "md"
      ? styles["textarea-md"]
      : styles["textarea-lg"];
    
    const textareaClasses = [
      styles.textarea,
      variantClass,
      sizeClass,
      error && styles["textarea-error"],
      disabled && styles["textarea-disabled"],
      className,
    ]
    .filter(Boolean)
    .join(" ");
    
  return (
    <div className={styles.textareaWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        disabled={disabled} 
        required={required} 
        autoFocus={autoFocus} 
        className={textareaClasses}
        {...props} 
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Textarea;