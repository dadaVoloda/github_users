import React, { FC } from 'react';

import styles from './Repos.module.css';

interface Props {
  name: string;
  description: string;
  login: string;
}

export const Repos: FC<Props> = ({ name, description, login }) => {
  return (
    <div className={styles.repos}>
      <a
        className={styles.link}
        href={`https://github.com/${login}/${name}`}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <p className={styles.text}>{description}</p>
    </div>
  );
};
