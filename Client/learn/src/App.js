import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// CSS imports
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/carousel-custom.css';

// Component imports
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Spinner from './common/spinner';
import BackToTop from './common/BackToTop';
import Layout from './components/Layout';
import HomePage from './Pages/Home';
import About from './Pages/about';
import Courses from './Pages/courses';
import Team from './Pages/Team';
import Categories from './components/Categories';
import Contact from './Pages/contact';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Helmet>
        {/* Favicon */}
        <link href="/img/favicon.ico" rel="icon" />

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <Spinner />
      <Navbar />
      
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/featured" element={<Team featured={true} />} />
          <Route path="/team/join" element={<div>Become an Instructor Page</div>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div className="container py-5 text-center"><h1>Page Not Found</h1></div>} />
        </Routes>
      </Layout>
      
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;