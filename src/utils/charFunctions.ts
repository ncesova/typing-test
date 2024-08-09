import {CharStyle, LetterToken} from '../types/LetterToken';

export function setCurrentChar(
  letters: LetterToken[],
  index: number
): LetterToken[] {
  return letters.map((item, itemIndex) => {
    if (itemIndex === index) {
      return {
        ...item,
        style: CharStyle.Current,
      };
    }

    return item;
  });
}

export function compareChars(
  letters: LetterToken[],
  curIndex: number,
  key: string,
  typosCount: number
): [result: LetterToken[], curIndex: number, typosCount: number] {
  let newIndex = curIndex;
  let newTyposCount = typosCount;

  const result = letters.map((item, index) => {
    if (index === curIndex && item.char === key) {
      //Change index and mark char as correct
      newIndex += 1;
      return {
        ...item,
        style: CharStyle.Correct,
      };
    } else if (index === curIndex && item.char !== key) {
      //increment typos count
      newTyposCount += 1;
      return {
        ...item,
        style: CharStyle.Wrong,
      };
    }

    return item;
  });

  return [result, newIndex, newTyposCount];
}
