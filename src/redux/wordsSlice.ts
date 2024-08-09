import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LetterToken} from '../types/LetterToken';
import getLetterArray from '../data/dataProvider';

type WordsState = {
  words: LetterToken[];
  currentIndex: number;
  keypressCount: number;
  typosCount: number;
};

const initialState: WordsState = {
  words: getLetterArray(),
  currentIndex: 0,
  keypressCount: 0,
  typosCount: 0,
};

const wordsSlice = createSlice({
  name: 'wordsSlice',
  initialState,
  reducers: {
    setWords(state, action: PayloadAction<LetterToken[]>) {
      state.words = action.payload;
    },
    setCurrentIndex(state, action: PayloadAction<number>) {
      state.currentIndex = action.payload;
    },
    setTyposCount(state, action: PayloadAction<number>) {
      state.typosCount = action.payload;
    },
    updateKeypressCount(state) {
      state.keypressCount = state.keypressCount + 1;
    },
    resetWordsSlice(state) {
      state.words = getLetterArray();
      state.currentIndex = 0;
      state.keypressCount = 0;
      state.typosCount = 0;
    },
  },
});

export const {
  setWords,
  setCurrentIndex,
  setTyposCount,
  updateKeypressCount,
  resetWordsSlice,
} = wordsSlice.actions;

export default wordsSlice.reducer;
