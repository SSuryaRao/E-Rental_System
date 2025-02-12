import React from 'react';
import './App.css';
import LoginPage from './pages/loginpage/LoginPage';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import HomePage from './pages/homepage/HomePage'; // Import HomePage
import AboutPage from './pages/aboutpage/AboutPage'; // Import AboutPage
import ProductPage from './pages/productspage/ProductPage'; // Import ProductsPage


function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <>
        <Navbar /> {/* Include Navbar at the top */}

        <div style={{ paddingBottom: '70px' }}> {/* Add padding to body to prevent content overlay by fixed footer */}
          <Routes> {/* Define your routes */}
            <Route path="/" element={<HomePage />} /> {/* Route for the Home page */}
            <Route path="/login" element={<LoginPage />} /> {/* Route for the Login page */}
            <Route path="/home" element={<HomePage />} /> {/* Route for the Home page */}
            <Route path="/about" element={<AboutPage />} /> {/* Route for the About page */}
            <Route path="/products" element={<ProductPage />} /> {/* Route for the Products page */}
            {/* Add more routes here for other pages */}
          </Routes>
        </div>
         {/* Add a div to position the footer at the bottom */}
          <Footer />
         {/* Include Footer at the bottom */}
      </>
    </BrowserRouter>
  );
}

export default App;