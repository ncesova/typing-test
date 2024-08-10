import {useAppSelector} from '../../redux/hooks';

function Results() {
  const speed = useAppSelector((state) => state.testSlice.speed);
  const accuracy = useAppSelector((state) => state.testSlice.accuracy);

  const titleClassName = 'text-sub text-lg font-medium md:text-xl';
  const infoClassName = 'text-main text-xl font-extrabold md:text-2xl';

  return (
    <div className="font-body bg-bg p-4 md:text-xl">
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
