import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top p-0">
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>Learnify</h2>
      </Link>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/courses" className={`nav-item nav-link ${location.pathname === '/courses' ? 'active' : ''}`}>Courses</Link>
          
          {/* Dropdown Menu Start */}
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Instructors</a>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/team" className="dropdown-item">All Instructors</Link>
              <Link to="/team/featured" className="dropdown-item">Featured Instructors</Link>
              <Link to="/team/join" className="dropdown-item">Become an Instructor</Link>
              <Link to="/testimonials" className="dropdown-item">Testimonials</Link>
            </div>
          </div>
          {/* Dropdown Menu End */}
          
          <Link to="/categories" className={`nav-item nav-link ${location.pathname === '/categories' ? 'active' : ''}`}>Categories</Link>
          <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </div>
        <Link to="/register" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></Link>
      </div>
    </nav>
  );
};

export default Navbar;