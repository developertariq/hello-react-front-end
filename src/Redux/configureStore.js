import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './Greetings/greetingsReducer';

const reducer = combineReducers({
  greetings: greetingsSlice,
});

const store = configureStore({
  reducer,
});

export default store;
