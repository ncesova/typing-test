import {CharStyle, CharType} from '../types/CharType';

interface CharProps {
  item: CharType;
}

export function Char({item}: CharProps) {
  let className = '';
  if (item.style === CharStyle.Correct) className += 'text-main';
  else if (item.style === CharStyle.Wrong) className += 'text-error';
  else if (item.style === CharStyle.Current)
    className += 'text-black bg-gray-200 rounded-sm';
  else className += 'text-sub';

  return <span className={className}>{item.char}</span>;
}

export default Char;
