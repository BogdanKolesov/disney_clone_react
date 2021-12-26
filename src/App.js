import Header from './components/Header/';
import Home from './components/Home';
import { GlobalTheme } from './themes/GlobalTheme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <GlobalTheme />
      <Header />
      <Routes>
        <Route path='/detail' element={<Detail />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router >
  );
}

export default App;
