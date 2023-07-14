import React, { FC } from 'react';
import { Repos } from '../Repos/Repos';
import { ReposInfoApi } from '../../types';

import styles from './ReposList.module.css';

interface Props {
  repos: ReposInfoApi[] | [];
  login: string;
}

export const ReposList: FC<Props> = ({ repos, login }) => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <h2 className={styles.title}>Репозитории</h2>
        <a
          className={styles.link}
          href={`https://github.com/${login}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
        >
          Все репозитории
        </a>
      </div>
      {repos.length ? (
        <ul className={styles.reposList}>
          {repos.map((repo) => (
            <li key={repo.id}>
              <Repos name={repo.name} description={repo.description} login={login} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>Нет репозиториев</h3>
      )}
    </div>
  );
};
