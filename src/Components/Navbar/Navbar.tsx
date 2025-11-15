import React from "react";
import { theme } from "../Styles/theme";
import styles from "./index.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";

type NavbarProps = {
    className?: string,
    title?: string,
    links?: { label: string; href: string }[];
    variant?: "dark" | "light" | "primary" | "secondary";
};

export const Navbar: React.FC<NavbarProps> = ({ 
    className,
    title = "UI-Library-0.0.0.0",
    links = [],
    variant = "light"
}) => {
    const variantClass =
        variant === "dark" ? styles["navbar-dark"] 
        : variant === "light" ? styles["navbar-light"]
        : variant === "primary" ? styles["navbar-primary"]
        : styles["navbar-secondary"];

    const navbarStyle: React.CSSProperties = {
            fontFamily: "sans-serif",
    };
    return (
        <nav className={`${styles.navbar} ${variantClass} ${navbarStyle} ${className}`}>
            <div className={styles.navbarLogo}>
                <h3>{title}</h3>
            </div>
            <div className={styles.navbarRight}>
                <ul className={styles.navbarLinks}>
                    {links.map((link) => (
                    <li className={styles.navbarLink} key={link.label}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}