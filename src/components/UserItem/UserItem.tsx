import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usersUrl } from '../../api/api';
import { formatNumber, pluralize } from '../../utils';

import styles from './UserItem.module.css';

interface Props {
  avatar: string;
  login: string;
}

export const UserItem: FC<Props> = ({ avatar, login }) => {
  const [company, setCompany] = useState('');
  const [repos, setRepos] = useState(0);

  useEffect(() => {
    fetch(`${usersUrl}/${login}`)
      .then((res) => res.json())
      .then((data) => {
        setCompany(data.company);
        setRepos(data.public_repos);
      });
  }, []);

  return (
    <div className={styles.user}>
      <img className={styles.image} src={avatar} alt="Avatar" />
      <div>
        <div>
          <Link to={`/users/${login}`} className={styles.name}>
            {login}
          </Link>
          , {formatNumber(repos)}&nbsp;{pluralize(repos, 'репозиторий')}
        </div>
        {!!company && <span> {company}</span>}
      </div>
    </div>
  );
};
