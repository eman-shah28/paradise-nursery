import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

import './App.css';

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">

        <div className="landing-content">

          <h1>
            Paradise Nursery
          </h1>

          <p className="tagline">
            Bring Nature Into Your Home
          </p>

          <p className="description">
            Discover beautiful plants for every corner
            of your home and create your own peaceful
            green paradise.
          </p>

          <Link
            to="/plants"
            className="get-started-btn"
          >
            Get Started
          </Link>

        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>

      {/* Home / Landing Page */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Plant Listing Page */}
      <Route
        path="/plants"
        element={<ProductList />}
      />

      {/* Shopping Cart Page */}
      <Route
        path="/cart"
        element={<CartItem />}
      />

      {/* About Us Page */}
      <Route
        path="/about"
        element={<AboutUs />}
      />

    </Routes>
  );
}

export default App;