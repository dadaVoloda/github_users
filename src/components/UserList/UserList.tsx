import React, { FC } from 'react';
import styles from './UserList.module.css';
import { UserItem } from '../UserItem/UserItem';

export const UserList: FC = () => {
  return (
    <ul className={styles.users}>
      <li>
        <UserItem />
      </li>
      <li>
        <UserItem />
      </li>
      <li>
        <UserItem />
      </li>
    </ul>
  );
};
