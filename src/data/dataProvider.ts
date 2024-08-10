import russian from './russian.json';
import {CharStyle, LetterToken} from '../types/LetterToken';

function stringToChar(text: string): LetterToken[] {
  return Array.from(text).map((item) => {
    return {char: item, style: CharStyle.Default} as LetterToken;
  });
}

const getLetterArray = () => {
  //TODO: add more languages
  const randomizedWords = [...russian.words].sort(() => Math.random() - 0.5);
  //TODO: add variable number of words
  const slicedWords = randomizedWords.slice(0, 15);
  return stringToChar(slicedWords.join(' '));
};

export default getLetterArray;
