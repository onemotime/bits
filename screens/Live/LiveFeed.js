import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFollowingHabits } from '../../redux/habitSlice';
import TopNav from '../../components/shared/TopNav';
import Loading from '../../screens/Loading/Loading';

import MateHabit from '../../components/LiveBoard/MateHabit';
import MateRegister from '../../components/LiveBoard/MateRegister';

const LiveFeed = () => {
  const { email, following } = useSelector(state => state.user);
  const { followingUserHabits, isFetching } = useSelector(state => state.habit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFollowingHabits(email));
  }, [following]);

  return (
    <>
      {!isFetching
        ? <>
            <TopNav />
              {following.length > 0
                ? <MateHabit
                    email={email}
                    followingUserHabits={followingUserHabits}
                    following={following}
                  />
                : <MateRegister email={email} />}
          </>
        : <Loading />}
    </>
  );
};

export default LiveFeed;
