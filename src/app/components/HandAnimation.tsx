'use client';

import styles from './HandAnimation.module.css';

export default function HandAnimation() {
  return (
    <div className={styles.hand}>
      <div className={styles.finger}></div>
      <div className={styles.finger}></div>
      <div className={styles.finger}></div>
      <div className={styles.finger}></div>
      <div className={styles.palm}></div>
      <div className={styles.thumb}></div>
    </div>
  );
}
