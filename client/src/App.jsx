import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Toaster position="top-center" reverseOrder={false} toastOptions={{
            success: {
              style: {
                background: 'white',
                color: 'black'
              },
              iconTheme: {
                primary: '#61dafb',
                secondary: 'white'
              }
            },

            error: {
              style: {
                background: 'white',
                color: 'black'
              },
              iconTheme: {
                primary: '#d32f2f',
                secondary: 'white'
              }
            }
          }} />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/posts/create"
              element={
                <ProtectedRoute>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
            <Route
              path="/posts/:id/edit"
              element={
                <ProtectedRoute>
                  <EditPost />
                </ProtectedRoute>
              }
            />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;