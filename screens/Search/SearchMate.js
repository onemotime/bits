import React from 'react';
import { useSelector } from 'react-redux';

import TopNav from '../../components/shared/TopNav';
import FollowMate from '../../components/SearchBoard/FollowMate';

const SearchMate = () => {
  const { email, userName, allUsers, following } = useSelector(state => state.user);

  return (
    <>
      <TopNav />
      <FollowMate
        allUsers={allUsers}
        following={following}
        email={email}
        userName={userName}
      />
    </>
  );
};

export default SearchMate;

