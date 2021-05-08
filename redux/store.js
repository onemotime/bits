import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import logger from 'redux';
import { userSlice } from './userSlice';

const reducer = {
  user: userSlice.reducer
};

const middleware = [reduxThunk, logger];

const store = configureStore({
  reducer,
  middleware: middleware
});

export default store;
