import React, { FC } from 'react';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          <Link to="/">Пользователи гитхаба</Link>
        </h1>
        <div className={styles.searchText}>
          <span>{'//'}</span>
          <span>Поиск</span>
        </div>
      </div>
      <div className={styles.right}>
        <Search />
      </div>
    </div>
  );
};
