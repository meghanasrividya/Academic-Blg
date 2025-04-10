import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import PostDetail from './pages/PostDetail';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className='page-wrapper'>
        <Navbar onSearch={setSearchQuery} />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home searchQuery={searchQuery} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/* Protected Routes */}
            <Route
              path='/create'
              element={
                <ProtectedRoute>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
            <Route
              path='/edit/:id'
              element={
                <ProtectedRoute>
                  <EditPost />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path='/posts/:id' element={<PostDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
