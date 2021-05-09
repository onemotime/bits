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

export const registerHabit = createAsyncThunk(
  'user/registerHabit',
  async (registerInput, thunkAPI) => {
    try {
      const response = await userApi.postHabit(registerInput);
      console.log('유저슬라이스 레지스터해빗 함수 응답' + response);
      if (response.status === 201) {
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
    userName: '',
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
    },
    [registerHabit.fulfilled]: (state, { payload }) => {
      state.habits.push(payload.newHabit);
      state.isFetching = false;
      state.isSuccess = true;
    },
    [registerHabit.pending]: (state) => {
      state.isFetching = false;
    },
    [registerHabit.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});
