
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import { AuthProvider } from './components/context/AuthContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';

function App() {


  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
