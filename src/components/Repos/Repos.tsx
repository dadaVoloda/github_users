import React, { FC } from 'react';
import styles from './Repos.module.css';

export const Repos: FC = () => {
  return (
    <div className={styles.repos}>
      <a className={styles.link} href="#" target="_blank" rel="noreferrer">
        body_matcher
      </a>
      <p className={styles.text}>Simplify your view testing. Forget assert_select.</p>
    </div>
  );
};
