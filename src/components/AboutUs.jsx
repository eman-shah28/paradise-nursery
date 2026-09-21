import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
  return (
    <div className="about-page">

      <Navbar />

      <main className="about-content">

        <h1>
          About Paradise Nursery
        </h1>

        <p>
          Welcome to Paradise Nursery, your online
          destination for beautiful plants and
          greenery.
        </p>

        <p>
          We believe that plants can transform
          ordinary spaces into peaceful and
          refreshing environments. Our collection
          includes indoor plants, succulents, and
          flowering plants for homes and offices.
        </p>

        <p>
          Our mission is to make buying plants
          simple, convenient, and enjoyable.
          Paradise Nursery provides a variety of
          plants so that every plant lover can find
          something suitable for their space.
        </p>

        <p>
          We are committed to providing a friendly
          online shopping experience and helping
          customers bring more greenery into their
          everyday lives.
        </p>

      </main>

    </div>
  );
}

export default AboutUs;