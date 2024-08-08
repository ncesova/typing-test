import {CharStyle, CharType} from '../types/CharType';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus metus nisl, fermentum ut augue quis, aliquam mollis sapien. Integer at gravida sapien. Pellentesque pharetra, arcu vitae consectetur vehicula, augue lorem.';
//Convert string to array of Char
function stringToChar(initialText: string): CharType[] {
  return Array.from(initialText).map((item) => {
    return {char: item, style: CharStyle.Default} as CharType;
  });
}

const getCharArray = () => {
  return stringToChar(text);
};
export default getCharArray;
