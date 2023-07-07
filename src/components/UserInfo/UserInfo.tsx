import React, { FC } from 'react';
import styles from './UserInfo.module.css';

export const UserInfo: FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.image}>img</div>
      <div>
        <div className={styles.textTop}>
          Chris Wanstrath,{' '}
          <a href="#" target="_blank" rel="noreferrer">
            defunct
          </a>
        </div>
        <ul className={styles.stats}>
          <li className={styles.stat}>
            <span>21.3k</span> подписчиков
          </li>
          <li className={styles.stat}>
            <span>210</span> подписок
          </li>
          <li className={styles.stat}>
            <a className={styles.site} href="#" target="_blank" rel="noreferrer">
              http://chriswanstrath.com/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
