import {useAppDispatch} from '../../redux/hooks';
import {resetTestState} from '../../redux/testSlice';
import {resetWordsSlice} from '../../redux/wordsSlice';

function Reset() {
  const dispatch = useAppDispatch();
  function resetTest() {
    dispatch(resetTestState());
    dispatch(resetWordsSlice());
  }
  return (
    <button
      className="font-body text-sub bg-subAlt mx-5 rounded-md px-4 text-xl font-bold md:self-start"
      onClick={resetTest}>
      REPEAT
    </button>
  );
}

export default Reset;
