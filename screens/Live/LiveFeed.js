import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFollowingHabits } from '../../redux/habitSlice';
import TopNav from '../../components/shared/TopNav';
import Loading from '../Animations/Loading/Loading';

import MateHabit from '../../components/LiveBoard/MateHabit';
import MateRegister from '../../components/LiveBoard/MateRegister';

const LiveFeed = () => {
  const { accessToken, following } = useSelector(state => state.user);
  const { followingUserHabits, isFetching } = useSelector(state => state.habit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFollowingHabits(accessToken));
  }, [following]);

  return (
    <>
      {isFetching
        ? <Loading />
        : <>
            <TopNav />
              {following.length > 0
                ? <MateHabit
                    followingUserHabits={followingUserHabits}
                    accessToken={accessToken}
                  />
                : <MateRegister />}
          </>}
    </>
  );
};

export default LiveFeed;
