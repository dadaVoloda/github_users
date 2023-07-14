import React, { FC } from 'react';
import { UserItem } from '../UserItem/UserItem';
import { UsersApi } from '../../types';

import styles from './UserList.module.css';

interface Props {
  users: UsersApi;
}

export const UserList: FC<Props> = ({ users }) => {
  return (
    <ul className={styles.users}>
      {users.map((user) => (
        <li key={user.id}>
          <UserItem login={user.login} avatar={user.avatar_url} />
        </li>
      ))}
    </ul>
  );
};
