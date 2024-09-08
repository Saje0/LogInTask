import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/Navbar/navbar';
import LoginForm from './components/LogInForm/login';
import Home from './components/Home/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
