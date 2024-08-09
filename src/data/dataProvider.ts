import russian from './russian.json';
import {CharStyle, LetterToken} from '../types/LetterToken';
const randomizedWords = [...russian.words].sort(() => Math.random() - 0.5);
const tenWords = randomizedWords.slice(0, 10);

function stringToChar(text: string): LetterToken[] {
  return Array.from(text).map((item) => {
    return {char: item, style: CharStyle.Default} as LetterToken;
  });
}

const getLetterArray = () => {
  return stringToChar(tenWords.join(' '));
};
export default getLetterArray;
