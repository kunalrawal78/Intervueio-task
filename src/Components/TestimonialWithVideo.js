import React from 'react';
import shortvideo from '../img/video.png';

const TestimonialWithVideo = () => {
  return (
    <div className="bg-white px-6 py-16 font-sora">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        
        {/* Left Side - Image with text below */}
        <div className="w-full md:w-1/2">
          <img
            src={shortvideo}
            alt="Niket Gupta testimonial"
            className=" w-full object-cover"
          />
         
        </div>

        {/* Right Side - Testimonial Text */}
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 font-thin">
            After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.
          </p>
          <p className="font-semibold text-black">Niket Gupta</p>
          <p className="text-sm text-gray-600 mb-4">Group head of talent acquisition, Yubi</p>
          <button
            href="#"
            className=" font-semibold hover:underline inline-flex items-center gap-1"
            style={{color:'#3674B5'}}
          >
            See more customer stories →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWithVideo;
