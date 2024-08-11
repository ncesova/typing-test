import {useAppSelector} from '../redux/hooks';

function Results() {
  const speed = useAppSelector((state) => state.testSlice.speed);
  const mistakes = useAppSelector((state) => state.wordsSlice.typosCount);
  const accuracy = useAppSelector((state) => state.testSlice.accuracy);

  let title = 'Average';
  const wpm = +speed;

  if (wpm > 130) {
    title = 'Замечательно';
  } else if (wpm > 115) {
    title = 'Прекрасно';
  } else if (wpm > 100) {
    title = 'Экспертный';
  } else if (wpm > 85) {
    title = 'Отлично';
  } else if (wpm > 70) {
    title = 'Хорошо';
  } else if (wpm > 55) {
    title = 'Базовый';
  } else if (wpm > 40) {
    title = 'Удовлетворительно';
  } else if (wpm > 25) {
    title = 'Плохо';
  } else if (wpm > 10) {
    title = 'Очень плохо';
  } else {
    title = 'Ужасно';
  }

  const titleClassName = 'text-sub text-lg font-medium md:text-xl';
  const infoClassName = 'text-xl font-extrabold md:text-2xl text-text';

  return (
    <div className="w-full bg-bg p-4 font-body md:text-xl">
      <div className={titleClassName}>
        {'Твой уровень печати: '}
        <span className={infoClassName}>{title}</span>
      </div>
      <progress
        max={120}
        value={speed}
        className="m-1 h-6 w-full [&::-moz-progress-bar]:bg-main [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-subAlt [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-main">
        {speed}
      </progress>
      <div>
        <span className={titleClassName}>Скорость:</span>{' '}
        <span className={infoClassName}>{speed} WPM</span>
      </div>
      <div>
        <span className={titleClassName}>Кол-во ошибок:</span>{' '}
        <span className={infoClassName}>{mistakes}</span>
      </div>
      <div>
        <span className={titleClassName}>Точность:</span>{' '}
        <span className={infoClassName}>{accuracy}%</span>
      </div>
    </div>
  );
}

export default Results;
