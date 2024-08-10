import {CharStyle, LetterToken} from '../../types/LetterToken';

interface CharProps {
  item: LetterToken;
}

export function Char({item}: CharProps) {
  let className = '';
  if (item.style === CharStyle.Correct) className += 'text-main';
  else if (item.style === CharStyle.Wrong)
    className += 'text-error border-b-4 border-errorExtra';
  else if (item.style === CharStyle.Current)
    className += 'text-sub border-l-4 border-caret';
  else className += 'text-sub';

  return <span className={className}>{item.char}</span>;
}

export default Char;
