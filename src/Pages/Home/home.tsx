import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import { Button } from '../../Components/Button'

const home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.section}>
        <div className={styles.center}>
          <h1 className={styles.fadeInLeft}>Make your website beautiful.</h1>
          <Button className={styles.Button} onClick={() => navigate('/components')}>Start Exploring</Button>
        </div>
    </section>
    </>
  )
}

export default home