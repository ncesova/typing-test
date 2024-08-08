import {configureStore} from '@reduxjs/toolkit';
import testReducer from './testSlice';
import wordsReducer from './wordsSlice';

const store = configureStore({
  reducer: {
    testSlice: testReducer,
    wordsSlice: wordsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
