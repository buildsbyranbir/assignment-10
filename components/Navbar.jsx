import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider.jsx';
import { FaHome, FaBuilding, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogOut = () => {
    logOut().catch(error => console.error(error));
  };

  const navLinks = (
    <>
      <li><NavLink to="/" className={({isActive}) => isActive ? "font-bold text-primary" : ""}>Home</NavLink></li>
      <li><NavLink to="/properties" className={({isActive}) => isActive ? "font-bold text-primary" : ""}>All Properties</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/add-property" className={({isActive}) => isActive ? "font-bold text-primary" : ""}>Add Property</NavLink></li>
          <li><NavLink to="/my-properties" className={({isActive}) => isActive ? "font-bold text-primary" : ""}>My Properties</NavLink></li>
          <li><NavLink to="/my-reviews" className={({isActive}) => isActive ? "font-bold text-primary" : ""}>My Ratings</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-primary gap-2">
           <FaHome /> HomeNest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-3">

        
        {/* Theme Controller */}
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={handleToggle} checked={theme === 'dark'} />
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,4.93,1,1,0,0,0,5.64,7.05Zm12.02,9.9a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0ZM16,12a1,1,0,0,0,1-1h1a1,1,0,0,0,0-2H17A1,1,0,0,0,16,12Zm2.36-4.95a1,1,0,0,0,0-1.41A1,1,0,0,0,16.93,4.93l-.71.71a1,1,0,0,0,1.41,1.41Zm-3.88,10.6A1,1,0,0,0,12,19a1,1,0,0,0-1-1A1,1,0,0,0,10,19.05a1,1,0,0,0,1.05.95V21a1,1,0,0,0,2,0Zm-3.88-5.71a4,4,0,1,1,5.66,0A4,4,0,0,1,10.6,11.94Z"/></svg>
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="w-10 rounded-full border-2 border-primary">
                <img alt="User" src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="menu-title px-4 py-2 text-primary font-bold">{user.displayName}</li>
              <li className="px-4 text-xs text-gray-500 mb-2">{user.email}</li>
              <li onClick={handleLogOut}><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-sm btn-ghost"><FaSignInAlt /> Login</Link>
            <Link to="/register" className="btn btn-sm btn-primary">Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;