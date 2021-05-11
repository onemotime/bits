import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { userSlice } from './userSlice';
import { habitSlice } from './habitSlice';

const reducer = {
  user: userSlice.reducer,
  habit: habitSlice.reducer
};

const middleware = [ReduxThunk, createLogger()];

const store = configureStore({
  reducer,
  middleware
});

export default store;
