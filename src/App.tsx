import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss';
import { Dashboard, Users, Login } from './pages';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
