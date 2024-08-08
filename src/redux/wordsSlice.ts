import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CharType} from '../types/CharType';
import getCharArray from '../data/dataProvider';

type WordsState = {
  words: CharType[];
  currentIndex: number;
  keydownCount: number;
  typosCount: number;
};

const initialState: WordsState = {
  words: getCharArray(),
  currentIndex: 0,
  keydownCount: 0,
  typosCount: 0,
};

const wordsSlice = createSlice({
  name: 'wordsSlice',
  initialState,
  reducers: {
    setWords(state, action: PayloadAction<CharType[]>) {
      state.words = action.payload;
    },
    setCurrentIndex(state, action: PayloadAction<number>) {
      state.currentIndex = action.payload;
    },
    setTyposCount(state, action: PayloadAction<number>) {
      state.typosCount = action.payload;
    },
    updateKeydownCount(state) {
      state.keydownCount = state.keydownCount + 1;
    },
    resetWordsSlice(state) {
      state.words = getCharArray();
      state.currentIndex = 0;
      state.keydownCount = 0;
      state.typosCount = 0;
    },
  },
});

export const {
  setWords,
  setCurrentIndex,
  setTyposCount,
  updateKeydownCount,
  resetWordsSlice,
} = wordsSlice.actions;

export default wordsSlice.reducer;
