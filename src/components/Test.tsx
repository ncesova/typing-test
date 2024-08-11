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
  setIsFocused,
  setIsStarted,
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
  const isFocused = useAppSelector((state) => state.testSlice.isFocused);

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
    if (keypressCount !== 0) {
      startTest();
    }

    if (currentIndex < words.length) {
      function inputHandler(event: Event) {
        const input = event.target as HTMLInputElement;

        const [newWords, newCurrentIndex, newTyposCount] = compareChars(
          words,
          currentIndex,
          input.value.slice(-1),
          typosCount
        );

        dispatch(setWords(newWords));
        dispatch(setCurrentIndex(newCurrentIndex));
        dispatch(setTyposCount(newTyposCount));
        dispatch(updateKeypressCount());

        if (newCurrentIndex === words.length) {
          finishTest();
        }
      }

      inputRef.current?.addEventListener('input', inputHandler);

      return () => {
        inputRef.current?.removeEventListener('input', inputHandler);
      };
    }
  }, [dispatch, words]);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  function startTest() {
    dispatch(setIsStarted(true));
    dispatch(setIsTimer(true));
  }

  function finishTest() {
    const correctLetters = keypressCount - typosCount;
    dispatch(setSpeed(getSpeed(correctLetters, timerCount)));
    dispatch(setAccuracy(getAccuracy(typosCount, keypressCount)));
    dispatch(setIsTimer(false));
    dispatch(setIsStarted(false));
    dispatch(setIsFinished(true));
  }

  function clickHandler() {
    console.log('Focused');
    dispatch(setIsFocused(true));
  }

  function blurHandler() {
    console.log('blurred');
    dispatch(setIsFocused(false));
  }

  return (
    <div className="relative">
      {!isFocused && (
        <div
          onClick={clickHandler}
          className="absolute inset-x-0 inset-y-0 z-10 grid items-center text-center font-heading text-2xl text-text">
          Нажмите, чтобы начать
        </div>
      )}
      <div
        onClick={clickHandler}
        className={`max-w-prose bg-bg p-4 font-heading text-xl font-medium tracking-wide md:text-2xl ${!isFocused && 'blur-md'}`}>
        {words.map((item, index) => {
          return <Char key={index} item={item} />;
        })}
        <input
          onBlur={blurHandler}
          ref={inputRef}
          style={{width: '5%', opacity: '0%'}}
        />
      </div>
    </div>
  );
}

export default Test;
