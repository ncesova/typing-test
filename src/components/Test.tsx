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

function Test() {
  const dispach = useAppDispatch();

  const words = useAppSelector((state) => state.wordsSlice.words);
  const currentIndex = useAppSelector((state) => state.wordsSlice.currentIndex);
  const keydownCount = useAppSelector(
    (state) => state.wordsSlice.keypressCount
  );
  const typosCount = useAppSelector((state) => state.wordsSlice.typosCount);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const newWords = setCurrentChar(words, currentIndex);
    dispach(setWords(newWords));
  }, [dispach, currentIndex]);

  useEffect(() => {
    if (currentIndex < words.length) {
      function keypressHandler(event: KeyboardEvent) {
        const [newWords, newCurrentIndex, newTyposCount] = compareChars(
          words,
          currentIndex,
          event.key,
          typosCount
        );

        dispach(setWords(newWords));
        dispach(setCurrentIndex(newCurrentIndex));
        dispach(setTyposCount(newTyposCount));
        dispach(updateKeypressCount());
      }

      document.addEventListener('keypress', keypressHandler);

      return () => {
        document.removeEventListener('keypress', keypressHandler);
      };
    }
  }, [dispach, words]);

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
