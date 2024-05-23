import React from 'react'
import TopNavbar from '../component/Nav/TopNavbar';
import Header from '../component/Sections/Header';
import Services from '../component/Sections/Services'
import Contact from '../component/Sections/Contact';
import Footer from '../component/Sections/Footer';

const HomePage = () => {
  return (
    <div>
        <TopNavbar/>
        <Header />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage
