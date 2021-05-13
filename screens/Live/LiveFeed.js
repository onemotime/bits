import React from 'react';
import { useSelector } from 'react-redux';
import TopNav from '../../components/shared/TopNav';

import MateHabit from '../../components/LiveBoard/MateHabit';
import MateRegister from '../../components/LiveBoard/MateRegister';

const LiveFeedScreen = () => {
  const { email, following } = useSelector(state => state.user);
  const { followingUserHabits } = useSelector(state => state.habit);

  return (
    <>
      <TopNav />
      {following.length > 0
        ? <MateHabit
            email={email}
            followingUserHabits={followingUserHabits}
            following={following}
          />
        : <MateRegister email={email} />}
    </>
  );
};

export default LiveFeedScreen;
