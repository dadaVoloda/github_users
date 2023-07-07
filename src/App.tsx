import React from 'react';
import { Header } from './components/Header/Header';
import { UserProfile } from './pages/UserProfile';
import { Users } from './pages/Users';
import { UsersSearch } from './pages/UsersSearch/UsersSearch';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/search" element={<UsersSearch />} />
        </Routes>
      </main>
    </div>
  );
};
