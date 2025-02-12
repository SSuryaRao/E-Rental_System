import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Import your image from the assets folder -  Path for Hero.jsx in src/pages/homepage
import heroImage from '../../assets/Rentalimage.jpg';

function Hero() { // Renamed component to Hero (as your filename is Hero.jsx)
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;
    const buttonsElement = buttonsRef.current;

    // Animation for Image (Fade In and Slight Scale)
    if (imageElement) {
      imageElement.style.opacity = 0;
      imageElement.style.transform = 'scale(0.95)';
      setTimeout(() => {
        imageElement.style.transition = 'opacity 1000ms ease-out, transform 1000ms ease-out';
        imageElement.style.opacity = 1;
        imageElement.style.transform = 'scale(1)';
      }, 100); // slight delay for staggered effect
    }

    // Animation for Text Content (Slide In from Bottom)
    if (textElement) {
      textElement.style.opacity = 0;
      textElement.style.transform = 'translateY(30px)';
      setTimeout(() => {
        textElement.style.transition = 'opacity 800ms ease-out, transform 800ms ease-out 200ms'; // delay start
        textElement.style.opacity = 1;
        textElement.style.transform = 'translateY(0)';
      }, 300); // delay after image
    }

    // Animation for Buttons (Fade In and Slight Scale)
    if (buttonsElement) {
      buttonsElement.style.opacity = 0;
      buttonsElement.style.transform = 'scale(0.9)';
      setTimeout(() => {
        buttonsElement.style.transition = 'opacity 800ms ease-out, transform 800ms ease-out 400ms'; // further delay
        buttonsElement.style.opacity = 1;
        buttonsElement.style.transform = 'scale(1)';
      }, 500); // delay after text
    }

  }, []); // Empty dependency array to run only once on mount


  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-24 relative overflow-hidden">
      {/* Decorative Wave Background - SVG Path */}
      <div className="absolute inset-0 -z-10 transform translate-y-24">
        <svg viewBox="0 0 1920 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-50 opacity-75">
          <path d="M0 500H1920V0C1920 0 1612.6 499.5 960 500C307.4 500.5 0 0 0 0V500Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2" ref={imageRef}>
            <div className="relative rounded-xl shadow-2xl overflow-hidden">
              <img
                src={heroImage} // Use the imported image variable here
                alt="Variety of Rental Items"
                className="object-cover w-full h-full"
                style={{minHeight: '400px'}}
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
          </div>
          <div className="md:order-1" ref={textRef}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
              Unlock Your City's Resources with Easy Rentals
            </h1>
            <p className="text-gray-700 text-xl mb-10 leading-relaxed">
              Your all-in-one platform to rent tools, equipment, and unique items from your neighbors and local businesses.  Find what you need, save money, and support your community.
            </p>
            <div className="space-x-6" ref={buttonsRef}>
              <Link to="/rentals" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
                Explore Rentals
              </Link>
              <Link to="/list-item" className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
                List Your Item
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; // Exporting as Hero to match filename