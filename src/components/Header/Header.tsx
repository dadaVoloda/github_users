import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from '../Search/Search';

import styles from './Header.module.css';

export const Header: FC = () => {
  const [searchText, setSearchText] = useState('');
  const { pathname } = useLocation();

  const [page, login] = pathname.split('/').filter((str) => str.length);

  useEffect(() => {
    if (page === 'search') {
      setSearchText('Поиск');
    } else if (page === 'users' && login) {
      setSearchText(login);
    } else {
      setSearchText('');
    }
  }, [page]);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          <Link to="/">Пользователи гитхаба</Link>
        </h1>
        {!!searchText && (
          <div className={styles.searchText}>
            <span>{'//'}</span>
            <span>{searchText}</span>
          </div>
        )}
      </div>
      <div className={styles.right}>
        <Search />
      </div>
    </div>
  );
};
