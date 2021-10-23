import React from 'react';
import styles from './style.module.scss';

interface Props {
  variant?: 'primary' | 'secondary';
}

const Spinner = ({ variant = 'primary' }: Props) => (
  <div className={styles.ring}>
    <div className={`${styles[variant]}`} />
    <div className={`${styles[variant]}`} />
    <div className={`${styles[variant]}`} />
    <div className={`${styles[variant]}`} />
  </div>
);

export default Spinner;
