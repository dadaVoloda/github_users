import React, { FC } from 'react';
import styles from './UserItem.module.css';

export const UserItem: FC = () => {
  return (
    <div className={styles.user}>
      <div className={styles.image}>img</div>
      <div>
        <a className={styles.name} href="#" target="_blank" rel="noreferrer">
          defaukt
        </a>
        , 15&nbsp;репозиториев Название организации
      </div>
    </div>
  );
};
