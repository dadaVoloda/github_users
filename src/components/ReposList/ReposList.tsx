import React, { FC } from 'react';
import styles from './ReposList.module.css';
import { Repos } from '../Repos/Repos';

export const ReposList: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <h2 className={styles.title}>Репозитории</h2>
        <a className={styles.link} href="#" target="_blank" rel="noreferrer">
          Все репозитории
        </a>
      </div>
      <ul className={styles.reposList}>
        <li>
          <Repos />
        </li>
        <li>
          <Repos />
        </li>
        <li>
          <Repos />
        </li>
      </ul>
    </div>
  );
};
