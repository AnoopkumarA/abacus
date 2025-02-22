import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AbacusPractice } from './components/AbacusPractice';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Analysis } from './components/Analysis';
import { theme } from './theme';
import './App.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './components/auth/Login';
import { SignUp } from './components/auth/SignUp';
import { AdminRoute } from './components/AdminRoute';
import { AdminDashboard } from './components/admin/AdminDashboard';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return null;
  if (!user) return <Navigate to="/login" />;
  
  return <>{children}</>;
};

function App() {
  const { user } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={
                  user ? <Navigate to="/practice" /> : <Login />
                } />
                <Route path="/signup" element={
                  user ? <Navigate to="/practice" /> : <SignUp />
                } />

                {/* Protected User Routes */}
                <Route path="/practice" element={
                  <ProtectedRoute>
                    <AbacusPractice />
                  </ProtectedRoute>
                } />

                {/* Admin Routes */}
                <Route path="/admin" element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                } />
                
                <Route path="/analysis" element={
                  <ProtectedRoute>
                    <Analysis />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;