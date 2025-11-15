import React from "react";
import styles from "./index.module.css";

type DropdownOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  label?: string;
  error?: string;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  size = "md",
  disabled = false,
  label,
  error,
  className,
  id,
  name,
  required = false,
  placeholder,
  ...props
}) => {
  const sizeClass =
    size === "sm"
      ? styles["dropdown-sm"]
      : size === "md"
      ? styles["dropdown-md"]
      : styles["dropdown-lg"];

  const dropdownClasses = [
    styles.dropdown,
    sizeClass,
    error && styles["dropdown-error"],
    disabled && styles["dropdown-disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.dropdownWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={dropdownClasses}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Dropdown;
