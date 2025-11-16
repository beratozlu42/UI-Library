import React from 'react'
import styles from './index.module.css'

interface SidebarProps {
  isExpanded: boolean
  onToggle: () => void
  selectedComponent: string | null
  onComponentSelect: (component: string | null) => void
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, onToggle, selectedComponent, onComponentSelect }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, component: string) => {
    e.preventDefault()
    // Toggle: if already selected, deselect to show all
    if (selectedComponent === component) {
      onComponentSelect(null)
    } else {
      onComponentSelect(component)
    }
  }

  return (
    <aside className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <button 
        className={styles.toggleButton}
        onClick={onToggle}
        aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
      >
        {isExpanded ? '✕' : '☰'}
      </button>
      {isExpanded && (
        <div className={styles.content}>
          <h3 className={styles.title}>Components</h3>
          <nav className={styles.nav}>
            <a 
              onClick={(e) => handleLinkClick(e, 'Navbar')}
              className={selectedComponent === 'Navbar' ? styles.active : ''}
            >
              Navbars
            </a>
            <a 
              onClick={(e) => handleLinkClick(e, 'Button')}
              className={selectedComponent === 'Button' ? styles.active : ''}
            >
              Buttons
            </a>
            <a 
              onClick={(e) => handleLinkClick(e, 'Input')}
              className={selectedComponent === 'Input' ? styles.active : ''}
            >
              Inputs
            </a>
            <a 
              onClick={(e) => handleLinkClick(e, 'Textarea')}
              className={selectedComponent === 'Textarea' ? styles.active : ''}
            >
              TextAreas
            </a>
            <a 
              onClick={(e) => handleLinkClick(e, 'Dropdown')}
              className={selectedComponent === 'Dropdown' ? styles.active : ''}
            >
              Dropdown Menus
            </a>
          </nav>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
