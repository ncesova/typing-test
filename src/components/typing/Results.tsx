import {useAppSelector} from '../../redux/hooks';

function Results() {
  const speed = useAppSelector((state) => state.testSlice.speed);
  const accuracy = useAppSelector((state) => state.testSlice.accuracy);

  let title = 'Average';
  const wpm = +speed;

  console.log(+speed);

  if (wpm > 130) {
    title = 'Excellent';
  } else if (wpm > 115) {
    title = 'Perfect';
  } else if (wpm > 100) {
    title = 'Nice';
  } else if (wpm > 85) {
    title = 'Great';
  } else if (wpm > 70) {
    title = 'Good';
  } else if (wpm > 55) {
    title = 'Average';
  } else if (wpm > 40) {
    title = 'Bad';
  } else if (wpm > 25) {
    title = 'Poor';
  } else if (wpm > 10) {
    title = 'Very bad';
  } else {
    title = 'Horrible';
  }

  const titleClassName = 'text-sub text-lg font-medium md:text-xl';
  const infoClassName = 'text-xl font-extrabold md:text-2xl text-text';

  return (
    <div className="bg-bg p-4 font-body md:text-xl">
      <div className={titleClassName}>
        {'Your typing speed is: '}
        <span className={infoClassName}>{title}</span>
      </div>
      <progress
        max={120}
        value={speed}
        className="h-6 w-full [&::-moz-progress-bar]:bg-main [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-subAlt [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-main">
        {speed}
      </progress>
      <div>
        <span className={titleClassName}>Speed:</span>{' '}
        <span className={infoClassName}>{speed} WPM</span>
      </div>
      <div>
        <span className={titleClassName}>Accuracy:</span>{' '}
        <span className={infoClassName}>{accuracy}%</span>
      </div>
    </div>
  );
}

export default Results;
