import TestWrapper from './components/typing/TestWrapper';
import Header from './components/ui/Header';
import Reset from './components/ui/Reset';

function App() {
  return (
    <div className="flex h-screen flex-col bg-bg">
      <Header />
      <Reset />
      <div className="flex flex-1 md:items-center md:justify-center">
        <TestWrapper />
      </div>
    </div>
  );
}
export default App;
