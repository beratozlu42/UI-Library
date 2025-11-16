import React from 'react'
import styles from './index.module.css'
import { Textarea } from '../../../../Components/Textarea'

const index = () => {
  return (
    <section>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className={styles.container}>
          <h2>Text Areas</h2>
          <Textarea label='Message' size='sm' variant='primary' required placeholder='Message' />
          <Textarea label='Message' size='md' variant='secondary' required placeholder='Message' />
          <Textarea label='Message' size='lg' variant='outline' disabled placeholder='Message' />
        </div>
    </section>
  )
}

export default index