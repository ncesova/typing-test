import {CharStyle, LetterToken} from '../types/LetterToken';

interface CharProps {
  item: LetterToken;
}

export function Char({item}: CharProps) {
  let className = '';
  if (item.style === CharStyle.Correct) className += 'text-main';
  else if (item.style === CharStyle.Wrong) className += 'text-error border-b-4';
  else if (item.style === CharStyle.Current)
    className += 'text-black bg-gray-200 rounded-sm';
  else className += 'text-sub';

  return <span className={className}>{item.char}</span>;
}

export default Char;
