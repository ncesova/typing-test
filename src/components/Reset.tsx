import {useAppDispatch} from '../redux/hooks';
import {resetTestState} from '../redux/testSlice';
import {resetWordsSlice} from '../redux/wordsSlice';

function Reset() {
  const dispatch = useAppDispatch();
  function resetTest() {
    dispatch(resetTestState());
    dispatch(resetWordsSlice());
  }
  return (
    <button
      className="mx-5 rounded-md bg-subAlt p-2 font-body text-xl font-bold text-sub md:self-start"
      onClick={resetTest}>
      Повторить
    </button>
  );
}

export default Reset;
