import {CharStyle, CharType} from '../types/CharType';

export function setCurrentChar(
  charsArray: CharType[],
  index: number
): CharType[] {
  return charsArray.map((item, itemIndex) => {
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
  chars: CharType[],
  curIndex: number,
  key: string,
  typosCount: number
): [result: CharType[], curIndex: number, typosCount: number] {
  let newIndex = curIndex;
  let newTyposCount = typosCount;

  const result = chars.map((item, index) => {
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
