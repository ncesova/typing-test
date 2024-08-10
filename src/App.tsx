import Results from './components/typing/Results';
import Test from './components/typing/Test';
import Header from './components/ui/Header';
import Reset from './components/ui/Reset';
import {useAppSelector} from './redux/hooks';

function App() {
  const isFinished = useAppSelector((state) => state.testSlice.isFinished);
  return (
    <div className="bg-bg flex h-screen flex-col">
      <Header />
      <Reset />
      <div className="flex flex-1 md:items-center md:justify-center">
        <div className="flex md:w-[80%] md:justify-center">
          {isFinished ? (
            <Results />
          ) : (
            <>
              <Test />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
