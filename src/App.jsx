// src/App.js (Your main App file)

import React from 'react';
import './App.css';
import LoginPage from './pages/loginpage/LoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
    BrowserRouter, // <-- Keep using BrowserRouter
    Routes,
    Route,
    useLocation
    // Ensure ScrollRestoration is NOT imported or used
} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import AboutPage from './pages/aboutpage/AboutPage';
import ProductPage from './pages/productspage/ProductPage';
import RegisterPage from './pages/registerpage/RegisterPage';
import MyContact from './pages/contact/contactpage';
import ProductDetails from './pages/productspage/ProductDetails';

// --- Import the manual scroll component ---
// Adjust the path './components/ScrollToTop' based on where you saved the file
import ScrollToTop from './components/ScrollToTop';

// AppContent component contains layout and routes
function AppContent() {
  const location = useLocation();

  // Define paths to hide the Footer
  const hideFooterPaths = ['/login', "/register"];
  // Optional: Define paths to hide Navbar as well (e.g., on login/register)
  // const hideNavbarPaths = ['/login', '/register'];

  return (
    <>
      {/* --- Use the ScrollToTop component --- */}
      {/* It runs its effect on every location change within this context */}
      <ScrollToTop />

      {/* Conditionally render Navbar */}
      {/* {!hideNavbarPaths.includes(location.pathname) && <Navbar />} */}
      <Navbar /> {/* Currently always rendering Navbar */}

      {/* Main content area */}
      {/* Added min-h-screen and padding-top (adjust pt-16 based on Navbar height) */}
      <div className="min-h-screen pt-16" style={{ paddingBottom: '70px' }}> {/* Adjust pt-16 as needed */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<MyContact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
           {/* Consider adding a 404 Route: <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>

      {/* Conditionally render the Footer */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

// Main App component sets up the BrowserRouter
function App() {
  return (
    // --- Keep using BrowserRouter ---
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;