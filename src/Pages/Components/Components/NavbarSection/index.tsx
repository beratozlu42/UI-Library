import React, { useState } from 'react'
import styles from './index.module.css'
import { Navbar } from '../../../../Components/Navbar'
import { Button } from '../../../../Components/Button'

const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/docs" },
  ];

export const index = () => {
    const [backgroundColor, setBackgroundColor] = useState<'dark' | 'secondary'>('dark');

    const toggleBackgroundColor = () => {
      setBackgroundColor(prev => prev === 'dark' ? 'secondary' : 'dark');
    };   

    return (
        <section>
            <div style={{ display: "grid", gap: 16 }}  className={styles.container}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Navbar</h2>
                <Button 
                variant="primary"
                size="sm"
                onClick={toggleBackgroundColor}
                >
                Change Backgroun Color
                </Button>
            </div>
            <div className="navbar-section" style={{backgroundColor: `var(--color-${backgroundColor})`, width: "100%", borderRadius: "8px"}}>
                <Navbar title="Light Variant" links={navigationLinks} variant="light" className={styles.Navbar} />
                <Navbar title="Dark Variant" links={navigationLinks} variant="dark" className={styles.Navbar} />
                <Navbar title="Primary Variant" links={navigationLinks} variant="primary" className={styles.Navbar} />
                <Navbar title="Secondary Variant" links={navigationLinks} variant="secondary" className={styles.Navbar} />
            </div>
            </div>
        </section>
    )
}

export default index;
