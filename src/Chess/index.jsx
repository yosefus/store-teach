import React from 'react'
import styles from './style.module.scss'

export default function Chess() {
   return (
      <div className={styles.board}>
         {Array.from(Array(8 * 8)).map((f, i) => <div key={i} className={styles.square}></div>)}
      </div>
   )
}
