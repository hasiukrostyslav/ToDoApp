import GlobalStyles from './styles/GlobalStyles';
import { TaskContextProvider } from './TaskContext';
import Header from './Header';
import MainSection from './MainSection';

function App() {
  return (
    <>
      <GlobalStyles />
      <TaskContextProvider>
        <Header />
        <MainSection />
      </TaskContextProvider>
    </>
  );
}

export default App;
