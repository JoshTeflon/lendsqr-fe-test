import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, Users, UserDetails, Login } from './pages';
import './App.scss';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers/users" element={<Users />} />
          <Route path="/customers/users/:username" element={<UserDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
