import React, { FC } from 'react';
import { formatNumber, pluralize } from '../../utils';

import styles from './UserInfo.module.css';

interface Props {
  avatar: string;
  name: string;
  login: string;
  blog: string;
  followers: number;
  following: number;
}

export const UserInfo: FC<Props> = (props) => {
  const { avatar, name, login, blog, followers, following } = props;
  return (
    <div className={styles.info}>
      <img className={styles.image} src={avatar} alt="Avatar" />
      <div>
        <div className={styles.textTop}>
          {!!name && `${name}, `}
          <a href={`https://github.com/${login}`} target="_blank" rel="noreferrer">
            {login}
          </a>
        </div>
        <ul className={styles.stats}>
          <li className={styles.stat}>
            <span>{formatNumber(followers)}</span> {pluralize(followers, 'подписчик')}
          </li>
          <li className={styles.stat}>
            <span>{formatNumber(following)}</span> {pluralize(following, 'подписка')}
          </li>
          {!!blog && (
            <li className={styles.stat}>
              <a className={styles.site} href={blog} target="_blank" rel="noreferrer">
                {blog}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
