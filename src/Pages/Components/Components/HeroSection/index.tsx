import React from 'react'
import styles from './index.module.css'

const index = () => {
  return (
    <section className={styles.section}>
        <div className={styles.center}>
            <h1>UI Components</h1>
            <span>
                Explore our collection of beautifully designed, 
                customizable UI components built with React and TypeScript. 
                From buttons and inputs to navigation bars and dropdowns, 
                discover ready-to-use components that will help you build stunning 
                user interfaces faster.
            </span>
        </div>
    </section>
  )
}

export default index