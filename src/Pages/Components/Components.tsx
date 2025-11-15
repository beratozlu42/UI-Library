import React, { useState } from 'react'
import { Navbar } from '../../Components/Navbar'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Textarea } from '../../Components/Textarea'
import styles from './index.module.css'

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
];

const Components = () => {
  const [backgroundColor, setBackgroundColor] = useState<'dark' | 'secondary'>('dark');

  const toggleBackgroundColor = () => {
    setBackgroundColor(prev => prev === 'dark' ? 'secondary' : 'dark');
  };

  return (
    <section style={{ padding: "32px 16px" }} className={styles.section}>
      <div style={{ display: "grid", gap: 24 }}>
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
        <div className={styles.container}>
          <h2 style={{ marginBottom: 16, color: "var(--color-fontColor-secondary)" }}>Buttons</h2>
          <Button variant='primary' size='sm'>Primary</Button>
          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="outline" size="lg">Outline Medium</Button>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className={styles.container}>
          <h2>Inputs</h2>
          <Input label='Email' size='sm' variant='primary' type='email' required placeholder='Email' />
          <Input label='Count' size='md' variant='secondary' type='number' required placeholder='Count' />
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className={styles.container}>
          <h2>Text Areas</h2>
          <Textarea label='Message' size='sm' variant='primary' required placeholder='Message' />
          <Textarea label='Message' size='md' variant='secondary' required placeholder='Message' />
          <Textarea label='Message' size='lg' variant='outline' disabled placeholder='Message' />
        </div>
      </div>
  </section>
  )
}

export default Components