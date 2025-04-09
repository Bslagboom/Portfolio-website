import React from 'react';
import VantaBackground from './Vanta'; // Vergeet niet de VantaBackground component te importeren

const App = () => {
  return (
    <div className="relative">
      <VantaBackground />
      
      {/* Navbar */}
      <nav>
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
      </nav>
      
      {/* Main Content */}
      <div className="relative z-20 text-white p-8 mt-20">
        <h1 className="text-4xl">Frontend Developer</h1>
      </div>
    </div>
  );
};

export default App;
