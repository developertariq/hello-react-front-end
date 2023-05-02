import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  status: '',
  error: null,
};

const FETCH_URL = 'http://localhost:3000/api';

export const getRandomGreeting = createAsyncThunk('greeting/message/FETCH_DATA', async () => {
  const response = await axios.get(FETCH_URL);
  return response.data.message;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGreeting.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        greeting: action.payload,
      }))
      .addCase(getRandomGreeting.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default greetingsSlice.reducer;
