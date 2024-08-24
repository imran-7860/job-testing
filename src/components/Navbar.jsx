import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-3">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-3xl font-bold">Job Portal</Link>
        <div className='flex gap-5 text-xl'>
          <Link to="/login" className="text-white ">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
