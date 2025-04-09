import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Materials from './pages/Materials';
import Upload from './pages/Upload';
import Requests from './pages/Requests';
import Profile from './pages/Profile';
import Forum from './pages/Forum';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
