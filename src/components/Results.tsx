import {useAppSelector} from '../redux/hooks';

function Results() {
  const speed = useAppSelector((state) => state.testSlice.speed);
  const accuracy = useAppSelector((state) => state.testSlice.accuracy);

  return (
    <div className="font-body bg-bg text-main text-lg">
      <div>Speed: {speed} WPM</div>
      <div>Accuracy: {accuracy}%</div>
    </div>
  );
}

export default Results;
