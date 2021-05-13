import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as habitApi from '../api/habitApi';
import { fetchSignin } from './userSlice';

export const fetchFollowingHabits = createAsyncThunk(
  'user/fetchFollowing',
  async (userEmail, thunkApi) => {
    try {
      const response = await habitApi.getFollowingHabits(userEmail);

      if (response.status === 200) {
        return response.followingUserHabits
      }

      return thunkApi.rejectWithValue(response);
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState = {
  followingUserHabits: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: ''
};

export const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchFollowingHabits.fulfilled]: (state, { payload }) => {
      state.followingUserHabits = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [fetchFollowingHabits.pending]: (state) => {
      state.isFetching = true;
      state.isSuccess = false;
    },
    [fetchFollowingHabits.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});
