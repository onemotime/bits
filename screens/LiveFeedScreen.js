import React from 'react';
import { useSelector } from 'react-redux';
import HomeTopNav from '../components/HomeTopNav';

import LiveFeed from '../components/LiveFeed';
import MateRegister from '../components/MateRegister';

const LiveFeedScreen = () => {
  const { email, following } = useSelector(state => state.user);
  const { followingUserHabits } = useSelector(state => state.habit);

  return (
    <>
      <HomeTopNav />
      {following.length > 0
        ? <LiveFeed
            email={email}
            habits={followingUserHabits}
            following={following}
          />
        : <MateRegister email={email} />}
    </>
  );
};

export default LiveFeedScreen;
