import Header from './components/Header/';
import Home from './components/Home';
import { GlobalTheme } from './themes/GlobalTheme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalTheme />
        <Header />
        <Routes>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router >
    </Provider>
  );
}

export default App;
