import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UserList } from '../../components/UserList/UserList';
import { UserApi } from '../../types';
import { usersUrl } from '../../api/api';

import styles from './UsersSearch.module.css';

export const UsersSearch = () => {
  const [users, setUsers] = useState<UserApi[] | []>([]);
  const [searchParams] = useSearchParams();
  const login = searchParams.get('query');

  useEffect(() => {
    if (login) {
      fetch(`${usersUrl}/${login}`)
        .then((res) => {
          if (res.status === 404) {
            throw new Error('User not found');
          }
          if (!res.ok) {
            throw new Error('API rate limit exceeded');
          }
          return res.json();
        })
        .then((data) => setUsers([data]))
        .catch((err) => {
          setUsers([]);
          console.error(err);
        });
    }
  }, [login]);

  return (
    <div>
      <h2 className={styles.title}>Пользователи по запросу {login}</h2>
      {users.length ? <UserList users={users} /> : <h3>Пользователи не найдены</h3>}
    </div>
  );
};
