import React from 'react'
import HeroSection from './Components/HeroSection'
import NavbarSection from './Components/NavbarSection'
import ButtonSection from './Components/ButtonSection'
import InputSection from './Components/InputSection'
import TextareaSection from './Components/TextareaSection'
import DropdownSection from './Components/DropdownSection'
import styles from './index.module.css'

const Components = () => {
  return (
    <section className={styles.section}>
      <div style={{ display: "grid", gap: 24 }}>
        <HeroSection />
        <NavbarSection />
        <ButtonSection />
        <InputSection />
        <TextareaSection />
        <DropdownSection />
      </div>
    </section>
  )
}

export default Components