import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Dishes from './components/Dishes';
import Review from './components/Review';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App; // Ensure this is the last line
