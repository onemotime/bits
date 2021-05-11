import React from 'react';
import { useSelector } from 'react-redux';

import Profile from '../components/Profile';
import HomeTopNav from '../components/HomeTopNav';

const ProfileScreen = () => {
  const user = useSelector(state => state.user);

  return (
    <>
      <HomeTopNav />
      <Profile userInfo={user} />
    </>
  );
};

export default ProfileScreen;
