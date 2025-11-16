import React from 'react'
import styles from './index.module.css'
import { Dropdown } from '../../../../Components/Dropdown'

const index = () => {
  return (
    <section>
        <h1>Dropdown Menus</h1>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className={styles.container}>
          <Dropdown 
          label='Navigation'
          size='sm'
          options={[
            { value: "1", label: "Home" },
            { value: "2", label: "Docs" },
            { value: "3", label: "Components" }
          ]} />
          <Dropdown 
          label='Navigation'
          size='md'
          options={[
            { value: "1", label: "Home" },
            { value: "2", label: "Docs" },
            { value: "3", label: "Components" }
          ]} /><Dropdown 
          label='Navigation'
          size='lg'
          options={[
            { value: "1", label: "Home" },
            { value: "2", label: "Docs" },
            { value: "3", label: "Components" }
          ]} />
        </div>
    </section>
  )
}

export default index