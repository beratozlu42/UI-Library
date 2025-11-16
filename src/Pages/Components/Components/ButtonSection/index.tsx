import React from 'react'
import styles from './index.module.css'
import { Button } from '../../../../Components/Button'

const index = () => {
  return (
    <section>
        <div className={styles.container}>
          <h2 style={{ marginBottom: 16, color: "var(--color-fontColor-secondary)" }}>Buttons</h2>
          <Button variant='primary' size='sm'>Primary</Button>
          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="outline" size="lg">Outline Medium</Button>
        </div>
    </section>
  )
}

export default index