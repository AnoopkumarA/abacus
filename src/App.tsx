import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AbacusPractice } from './components/AbacusPractice';
import { PracticeSelector } from './components/PracticeSelector';
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
import { SquareRootPractice } from './components/SquareRootPractice';
import { SquareNumber } from './components/SquareNumber';
import { KindergartenAbacus } from './components/KindergartenAbacus';
import { KindergartenHub } from './components/KindergartenHub';
import { KindergartenCalculation } from './components/KindergartenCalculation';
import { MemoryGame } from './components/MemoryGame';

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
                    <PracticeSelector />
                  </ProtectedRoute>
                } />
                <Route path="/practice/abacus" element={
                  <ProtectedRoute>
                    <AbacusPractice />
                  </ProtectedRoute>
                } />
                <Route path="/practice/square-root" element={
                  <ProtectedRoute>
                    <SquareRootPractice />
                  </ProtectedRoute>
                } />
                <Route path="/practice/square-number" element={
                  <ProtectedRoute>
                    <SquareNumber />
                  </ProtectedRoute>
                } />
                <Route path="/memory-game" element={
                  <ProtectedRoute>
                    <MemoryGame />
                  </ProtectedRoute>
                } />
                <Route path="/kindergarten" element={<KindergartenHub />} />
                <Route path="/kindergarten/counting" element={<KindergartenAbacus />} />
                <Route path="/kindergarten/calculation" element={<KindergartenCalculation />} />

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