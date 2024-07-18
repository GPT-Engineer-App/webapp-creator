import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Layout from './layouts/default';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;