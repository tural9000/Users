import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../appHeader/AppHeader'
import styles from './rootLayout.module.scss';

const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
        <AppHeader/>
        <main className={styles.content}>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout