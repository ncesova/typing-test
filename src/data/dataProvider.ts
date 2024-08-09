import {CharStyle, LetterToken} from '../types/LetterToken';
const initialText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus metus nisl, fermentum ut augue quis, aliquam mollis sapien. Integer at gravida sapien. Pellentesque pharetra, arcu vitae consectetur vehicula, augue lorem.';
//Convert string to array of Char
function stringToChar(text: string): LetterToken[] {
  return Array.from(text).map((item) => {
    return {char: item, style: CharStyle.Default} as LetterToken;
  });
}

const getLetterArray = () => {
  return stringToChar(initialText);
};
export default getLetterArray;
