import {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {compareChars, setCurrentChar} from '../utils/charFunctions';
import {
  setCurrentIndex,
  setTyposCount,
  setWords,
  updateKeypressCount,
} from '../redux/wordsSlice';
import Char from './Char';
import {
  setAccuracy,
  setIsFinished,
  setIsTimer,
  setSpeed,
  updateTimerCount,
} from '../redux/testSlice';
import {getAccuracy, getSpeed} from '../utils/statsFunctions';

function Test() {
  const dispatch = useAppDispatch();

  const words = useAppSelector((state) => state.wordsSlice.words);
  const currentIndex = useAppSelector((state) => state.wordsSlice.currentIndex);
  const typosCount = useAppSelector((state) => state.wordsSlice.typosCount);
  const keypressCount = useAppSelector(
    (state) => state.wordsSlice.keypressCount
  );
  const timerCount = useAppSelector((state) => state.testSlice.timerCount);
  const isTimer = useAppSelector((state) => state.testSlice.isTimer);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const newWords = setCurrentChar(words, currentIndex);
    dispatch(setWords(newWords));
  }, [dispatch, currentIndex]);

  useEffect(() => {
    if (isTimer) {
      const timer = setTimeout(() => {
        dispatch(updateTimerCount());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, timerCount, isTimer]);

  useEffect(() => {
    if (keypressCount === 0) {
      dispatch(setIsTimer(true));
    }

    if (currentIndex < words.length) {
      function keypressHandler(event: KeyboardEvent) {
        const [newWords, newCurrentIndex, newTyposCount] = compareChars(
          words,
          currentIndex,
          event.key,
          typosCount
        );

        dispatch(setWords(newWords));
        dispatch(setCurrentIndex(newCurrentIndex));
        dispatch(setTyposCount(newTyposCount));
        dispatch(updateKeypressCount());

        if (newCurrentIndex === words.length) {
          const correctLetters = keypressCount - typosCount;
          dispatch(setSpeed(getSpeed(correctLetters, timerCount)));
          dispatch(setAccuracy(getAccuracy(typosCount, keypressCount)));
          dispatch(setIsTimer(false));
          dispatch(setIsFinished(true));
        }
      }

      document.addEventListener('keypress', keypressHandler);

      return () => {
        document.removeEventListener('keypress', keypressHandler);
      };
    }
  }, [dispatch, words]);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div className="font-heading bg-bg p-4 text-xl font-medium tracking-wide">
      {words.map((item, index) => {
        return <Char key={index} item={item} />;
      })}
      <input ref={inputRef} style={{width: '5%', opacity: '0%'}} />
    </div>
  );
}

export default Test;
