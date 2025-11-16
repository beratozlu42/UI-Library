import React, { useState, useEffect } from 'react'
import NavbarSection from './Components/NavbarSection'
import ButtonSection from './Components/ButtonSection'
import InputSection from './Components/InputSection'
import TextareaSection from './Components/TextareaSection'
import DropdownSection from './Components/DropdownSection'
import Sidebar from './Sidebar'
import styles from './index.module.css'

const Docs = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded)
  }

  useEffect(() => {
    if (isSidebarExpanded) {
      document.body.classList.add('sidebar-expanded')
      document.body.classList.remove('sidebar-collapsed')
    } else {
      document.body.classList.add('sidebar-collapsed')
      document.body.classList.remove('sidebar-expanded')
    }

    return () => {
      document.body.classList.remove('sidebar-expanded', 'sidebar-collapsed')
    }
  }, [isSidebarExpanded])

  const renderComponent = () => {
    if (!selectedComponent) {
      return (
        <div style={{ padding: "48px 16px", maxWidth: 720, margin: "0 auto" }}>
          <h2>Documentation</h2>
          <p style={{ marginTop: 16 }}>
            Build your UI by combining the components showcased in the Components section. 
            Use the navigation to explore available examples while the documentation is under construction.
          </p>
        </div>
      )
    }

    switch (selectedComponent) {
      case 'Navbar':
        return <NavbarSection />
      case 'Button':
        return <ButtonSection />
      case 'Input':
        return <InputSection />
      case 'Textarea':
        return <TextareaSection />
      case 'Dropdown':
        return <DropdownSection />
      default:
        return null
    }
  }

  return (
    <>
      <Sidebar 
        isExpanded={isSidebarExpanded} 
        onToggle={toggleSidebar}
        selectedComponent={selectedComponent}
        onComponentSelect={setSelectedComponent}
      />
      <section 
        className={`${styles.section} ${isSidebarExpanded ? styles.withSidebar : styles.collapsedSidebar}`}
      >
        <div style={{ display: "grid", gap: 24 }}>
          {renderComponent()}
        </div>
      </section>
    </>
  )
}

export default Docs