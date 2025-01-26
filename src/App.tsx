import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import ProtectedRoute from './components/ui/ProtectedRoute.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login"/>
}

function RegisterAndLogout() {
  // Clear local storage so that existing access tokens are not submitted to register route
  localStorage.clear();
  return <Register />
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/register" element={<RegisterAndLogout />}/>
         {/* If access any other route */}
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
