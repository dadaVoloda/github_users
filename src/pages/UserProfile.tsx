import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserInfo } from '../components/UserInfo/UserInfo';
import { ReposList } from '../components/ReposList/ReposList';
import { usersUrl } from '../api/api';
import { ReposInfoApi, UserInfoApi } from '../types';

export const UserProfile = () => {
  const [user, setUser] = useState<UserInfoApi | null>(null);
  const [repos, setRepos] = useState<ReposInfoApi[] | []>([]);
  const { login } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`${usersUrl}/${login}`).then((res) => {
        if (res.status === 404) {
          throw new Error('User not found');
        }
        if (!res.ok) {
          throw new Error('API rate limit exceeded');
        }
        return res.json();
      }),
      fetch(`${usersUrl}/${login}/repos`).then((res) => res.json()),
    ])
      .then(([user, repos]) => {
        setUser(user);
        setRepos(repos);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!user) return <h2>Нет пользовователя</h2>;

  return (
    <>
      <UserInfo
        name={user.name}
        login={user.login}
        avatar={user.avatar_url}
        blog={user.blog}
        followers={user.followers}
        following={user.following}
      />
      <ReposList login={user.login} repos={repos} />
    </>
  );
};
