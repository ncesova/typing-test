import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TestState = {
  isStarted: boolean;
  isFinished: boolean;
};

const initialState: TestState = {
  isStarted: false,
  isFinished: false,
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setIsStarted(state, action: PayloadAction<boolean>) {
      state.isStarted = action.payload;
    },
    setIsFinished(state, action: PayloadAction<boolean>) {
      state.isFinished = action.payload;
    },
    resetTestState(state) {
      (state.isStarted = false), (state.isFinished = false);
    },
  },
});

export const {setIsStarted, setIsFinished, resetTestState} = testSlice.actions;

export default testSlice.reducer;
