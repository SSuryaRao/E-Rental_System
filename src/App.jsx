import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content - Grows to Push Footer Down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<h1 className="text-center mt-10">Home Page</h1>} />
            <Route path="/about" element={<h1 className="text-center mt-10">About Page</h1>} />
          </Routes>
        </main>

        {/* Footer - Always at Bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
