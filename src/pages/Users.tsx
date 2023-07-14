import React, { useEffect, useState } from 'react';
import { UserList } from '../components/UserList/UserList';
import { UsersApi } from '../types';
import { usersUrl } from '../api/api';

export const Users = () => {
  const [users, setUsers] = useState<UsersApi | []>([]);

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length) {
          setUsers(data.slice(0, 12));
        } else {
          throw new Error(data.message);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return <UserList users={users} />;
};
