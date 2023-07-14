import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.css';

export const Search: FC = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length) {
      navigate({
        pathname: '/search',
        search: `?query=${value}`,
      });
    }
    setValue('');
  };

  return (
    <form className={styles.search} onSubmit={formHandler}>
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск пользователя"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className={styles.button}>Найти</button>
    </form>
  );
};
