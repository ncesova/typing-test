import {useAppSelector} from '../../redux/hooks';
import Results from './Results';
import Test from './Test';

function TestWrapper() {
  const isFinished = useAppSelector((state) => state.testSlice.isFinished);
  return (
    <div className="flex md:w-[80%] md:justify-center">
      {isFinished ? (
        <Results />
      ) : (
        <div className="flex flex-col items-center gap-2 font-heading text-lg text-text">
          <Test />
        </div>
      )}
    </div>
  );
}

export default TestWrapper;
