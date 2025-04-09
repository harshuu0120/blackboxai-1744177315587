import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          StudyHub
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/materials" className="hover:text-primary-dark transition-colors">
            Materials
          </Link>
          <Link to="/forum" className="hover:text-primary-dark transition-colors">
            Forum
          </Link>
          <Link to="/requests" className="hover:text-primary-dark transition-colors">
            Requests
          </Link>
          <div className="flex space-x-2">
            <Link to="/login" className="btn bg-gray-100 text-gray-800 hover:bg-gray-200">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
