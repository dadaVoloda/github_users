import React, { FC } from 'react';
import styles from './Search.module.css';

export const Search: FC = () => {
  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" placeholder="Поиск пользователя" />
      <button className={styles.button}>Найти</button>
    </div>
  );
};
