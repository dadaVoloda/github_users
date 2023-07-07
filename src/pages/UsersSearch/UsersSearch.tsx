import React from 'react';
import styles from './UsersSearch.module.css';
import { UserList } from '../../components/UserList/UserList';

export const UsersSearch = () => {
  return (
    <div>
      <h2 className={styles.title}>Пользователи по запросу defun</h2>
      <UserList />
    </div>
  );
};
