import Header from './components/Header/';
import Home from './components/Home';
import { GlobalTheme } from './themes/GlobalTheme';

function App() {
  return (
    <>
      <GlobalTheme />
      <Header />
      <Home />
    </>
  );
}

export default App;
