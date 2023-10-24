import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
};

const RANDOM_GREETING_URL = 'http://127.0.0.1:3000//api/v1/messages/random';

export const fetchGreeting = createAsyncThunk('messages/random', async () => {
  const res = await axios.get(RANDOM_GREETING_URL, {
    headers: {
      Accept: 'application/json',
    },
  });
  return res.data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => ({ ...state, status: 'loading' }));
    builder.addCase(fetchGreeting.fulfilled, (state, action) => ({
      ...state,
      greeting: action.payload,
    }));
  },
});

export default greetingsSlice.reducer;
