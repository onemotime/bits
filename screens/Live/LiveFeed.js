import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFollowingHabits } from '../../featrues/habitSlice';
import TopNav from '../../components/shared/TopNav/TopNav';
import Loading from '../Animations/Loading/Loading';

import MateHabit from '../../components/LiveBoard/MateHabit/MateHabit';
import MateRegister from '../../components/LiveBoard/MateRegister/MateRegister';

const LiveFeed = () => {
  const { following } = useSelector(state => state.user);
  const { followingUserHabits, isFetching } = useSelector(state => state.habit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFollowingHabits());
  }, [following]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <TopNav />
        {following.length > 0
          ? <MateHabit
              followingUserHabits={followingUserHabits}
            />
          : <MateRegister />}
    </>
  );
};

export default LiveFeed;
