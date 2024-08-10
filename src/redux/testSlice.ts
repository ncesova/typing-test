import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TestState = {
  isStarted: boolean;
  isFinished: boolean;
  isTimer: boolean;
  timerCount: number;
  isFocused: boolean;
  speed: string;
  accuracy: string;
  numOfWords: number;
};

const initialState: TestState = {
  isStarted: false,
  isFinished: false,
  isTimer: false,
  timerCount: 0,
  isFocused: false,
  speed: '0.00',
  accuracy: '0.00',
  numOfWords: 10,
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
    setIsTimer(state, action: PayloadAction<boolean>) {
      state.isTimer = action.payload;
    },
    updateTimerCount(state) {
      state.timerCount = state.timerCount + 1;
    },
    resetTimerCount(state) {
      state.timerCount = 0;
    },
    setIsFocused(state, action: PayloadAction<boolean>) {
      state.isFocused = action.payload;
    },
    setSpeed(state, action: PayloadAction<string>) {
      state.speed = action.payload;
    },
    setAccuracy(state, action: PayloadAction<string>) {
      state.accuracy = action.payload;
    },
    setNumOfWords(state, action: PayloadAction<number>) {
      state.numOfWords = action.payload;
    },
  },
});

export const {
  setIsStarted,
  setIsFinished,
  resetTestState,
  setIsTimer,
  updateTimerCount,
  resetTimerCount,
  setIsFocused,
  setSpeed,
  setAccuracy,
  setNumOfWords,
} = testSlice.actions;

export default testSlice.reducer;
