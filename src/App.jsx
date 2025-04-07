import React from 'react';
import './App.css';
import LoginPage from './pages/loginpage/LoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import AboutPage from './pages/aboutpage/AboutPage';
import ProductPage from './pages/productspage/ProductPage';
import RegisterPage from './pages/registerpage/RegisterPage';
import MyContact from './pages/contact/contactpage';


// A new component that uses the useLocation hook
function AppContent() {
  const location = useLocation();
  
  // Define the paths where you don't want to show the Footer
  const hideFooterPaths = ['/login',"/register"];
  
  return (
    <>
      <Navbar /> {/* Navbar always shows at the top */}
      
      <div style={{ paddingBottom: '70px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<MyContact />} />
        </Routes>
      </div>

      {/* Conditionally render the Footer only if current path is not in hideFooterPaths */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
