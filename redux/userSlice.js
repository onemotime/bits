import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from '../api/userApi';

export const fetchSignin = createAsyncThunk(
  'user/fetchSignin',
  async (loginInput, thunkAPI) => {
    try {
      const response = await userApi.requestSignin(loginInput);
      // const { accessToken, currentUser } = response;

      if (response.status === 200) {
        return response;
      }

      return thunkAPI.rejectWithValue(response);
    } catch (err) {
      console.error(err);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    habits: [],
    accessToken: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  },
  reducers: {
  },
  extraReducers: {
    [fetchSignin.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.email = payload.email;
      state.userName = payload.userName;
      state.habits = payload.habits;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [fetchSignin.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchSignin.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});
