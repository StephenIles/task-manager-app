import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './hooks/useTheme'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'

// Components
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/tasks" 
                element={
                  <ProtectedRoute>
                    <Tasks />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <Toaster 
            position="top-right"
            toastOptions={{
              className: 'dark:bg-secondary-800 dark:text-white',
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
