import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.tsx';
import Register from './components/register/Register.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
