import React from 'react'
import styles from './index.module.css'
import { Input } from '../../../../Components/Input'

const index = () => {
  return (
    <section>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className={styles.container}>
          <h2>Inputs</h2>
          <Input label='Email' size='sm' variant='primary' type='email' required placeholder='Email' />
          <Input label='Count' size='md' variant='secondary' type='number' required placeholder='Count' />
        </div>
    </section>
  )
}

export default index