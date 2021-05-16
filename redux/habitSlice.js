import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as habitApi from '../api/habitApi';

export const fetchFollowingHabits = createAsyncThunk(
  'habit/fetchFollowing',
  async (accessToken, thunkApi) => {
    try {
      const response = await habitApi.getFollowingHabits(accessToken);

      if (response.status === 200) {
        return response.followingUserHabits
      }

      return thunkApi.rejectWithValue(response);
    } catch (err) {
      console.error(err);
    }
  }
);

export const updateHabitLikes = createAsyncThunk(
  'habit/patchHabit',
  async (updateHabitInput, thunkApi) => {
    try {
      const response = await habitApi.patchHabitLike(updateHabitInput);

      if (response.status === 200) return;

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
