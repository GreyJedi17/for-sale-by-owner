import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import MyHomes from './MyHomes';
import Houses from './Houses';

export default function Nav() {
  const [selected, setSelected] = useState('login');

  const renderPage = () => {
    if (selected === 'Login') {
      return <Login />;
    }
    if (selected === 'Logout') {
      return <Logout />;
    }
    if (selected === 'Profile') {
      return <Profile />;
    }
    if (selected === 'MyHomes') {
      return <MyHomes />;
    }
  };

  const handleNavChange = (page) => setSelected(page);

  return (
    <div>
      <NavTabs selected={selected} handleNavChange={handleNavChange} />
      <Houses />
      {renderPage()}
    </div>
  );
}
