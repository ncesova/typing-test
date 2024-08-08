import CharTypeArray from '../data/dataProvider';
import {CharStyle, CharType} from '../types/CharType';
import Char from './Char';

function Test() {
  const words = Array.from('qwertyuio');
  return (
    <div className="font-heading bg-bg text-3xl font-medium">
      {words.map((item, index) => {
        return (
          <Char
            key={index}
            item={{char: item, style: CharStyle.Default} as CharType}
          />
        );
      })}
    </div>
  );
}

export default Test;
