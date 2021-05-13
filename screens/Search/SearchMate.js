import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/userSlice';

import Loading from '../../screens/Loading/Loading';
import TopNav from '../../components/shared/TopNav';
import FollowMate from '../../components/SearchBoard/FollowMate';

const SearchMate = () => {
  const { email, userName, allUsers, following, isFetching } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(email));
  }, []);

  return (
    <>
      {isFetching
        ? <Loading />
        : <>
            <TopNav />
            <FollowMate
              allUsers={allUsers}
              following={following}
              email={email}
              userName={userName}
            />
          </>}
    </>
  );
};

export default SearchMate;

