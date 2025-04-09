import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Study Materials Hub</h1>
      <p className="text-xl mb-8">
        Your one-stop platform for accessing, sharing, and requesting study materials
      </p>
      
      <div className="flex justify-center gap-4 mb-12">
        <Link to="/materials" className="btn">
          Browse Materials
        </Link>
        <Link to="/register" className="btn bg-secondary hover:bg-secondary-dark">
          Get Started
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Upload</h2>
          <p>Share your study materials with fellow students</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Search</h2>
          <p>Find exactly what you need with our powerful search</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Request</h2>
          <p>Ask for specific materials you can't find</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
