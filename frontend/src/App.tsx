import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.tsx';
import Register from './components/register/Register.tsx';
import Dashboard from './components/dashboard/Dashboard.tsx';
import Layout from './components/layout/Layout.tsx';
import Expenses from './components/expenses/Expenses.tsx';
import Reports from './components/reports/Reports.tsx';
import ChangePassword from './components/changePassword/ChangePassword.tsx';
import UpdateProfile from './components/update-profile/UpdateProfile.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings/change-password" element={<ChangePassword />} />
          <Route path="/settings/update-profile" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
