import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, Users, UserDetails, Login } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    },
  },
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers/users" element={<Users />} />
            <Route path="/customers/users/:userId" element={<UserDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </QueryClientProvider>
  );
}

export default App;
