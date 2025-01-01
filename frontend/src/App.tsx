import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.tsx';
import Register from './components/register/Register.tsx';
import Dashboard from './components/dashboard/Dashboard.tsx';
import Layout from './components/layout/Layout.tsx';
import Expenses from './components/expenses/Expenses.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
