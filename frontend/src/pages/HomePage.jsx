import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel/Carousel';
import Feature_1 from '../components/Feature_1/Feature_1';
import Feature_2 from '../components/Feature_2/Feature_2';
import Footer from '../components/Footer/Footer';
import Feedback from '../components/Feedback/Feedback';
import ContactUs from '../components/ContactUs/ContactUs';

function HomePage() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Feature_1 />
    <Feature_2 />
    <Feedback />
    <ContactUs />
    <Footer />
    </>
  );
}

export default HomePage;

