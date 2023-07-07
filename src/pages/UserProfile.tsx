import React from 'react';
import { UserInfo } from '../components/UserInfo/UserInfo';
import { ReposList } from '../components/ReposList/ReposList';

export const UserProfile = () => {
  return (
    <>
      <UserInfo />
      <ReposList />
    </>
  );
};
