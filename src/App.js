
import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
import InterviewResources from './Components/InterviewResources';
import Security from './Components/Security';
import TestimonialWithVideo from './Components/TestimonialWithVideo';
import ExploreProducts from './Components/ExploreProducts';
import FAQSection from './Components/FAQSection';
import Footer from './Components/Footer';


function App() {

  return (
    <>

      <div className='space-y-20'>
        <NavBar/>
        <InterviewResources/>
        <Security/>
        <TestimonialWithVideo/>
        <ExploreProducts/>
        <div className=''>
           <FAQSection/>
        <Footer/>
        </div>
       

      </div>
    </>
  );
}

export default App;

