import Results from './components/Results';
import Test from './components/Test';
import {useAppSelector} from './redux/hooks';

function App() {
  const isFinished = useAppSelector((state) => state.testSlice.isFinished);
  return (
    <div>
      {isFinished ? (
        <Results />
      ) : (
        <>
          <Test />
        </>
      )}
    </div>
  );
}
export default App;
