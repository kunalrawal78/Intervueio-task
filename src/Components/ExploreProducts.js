import React from 'react'

import ondemandImg from '../img/firstcard.png';
import liveImg from '../img/seccard.png';
import assessmentImg from '../img/thirdcard.png';

const productData = [
  {
    title: 'On-demand',
    description: 'Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us',
    image: ondemandImg,
    linkText: 'Know more →',
  },
  {
    title: 'Live interviews',
    description: 'Assess candidates in real-time with our live coding environment & integrated video calls',
    image: liveImg,
    linkText: 'Know more →',
  },
  {
    title: 'Assessments',
    description: 'Share assessments across batches with MCQ, Programming and Subjective questions.',
    image: assessmentImg,
    linkText: 'Know more →',
  },
];

const ExploreProducts = () => {
  return (
    <div className="bg-white py-20 px-4 font-sora">
      <h2 className="text-2xl md:text-3xl font-thin text-center mb-12 "
      style={{fontWeight:'350'}}>
        Explore more products on intervue
      </h2>

     <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
  {productData.map((product, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-[0_4px_20px_rgba(1,1,1,0.1)] p-4 transition hover:shadow-lg"
    >
      <img
        src={product.image}
        alt={product.title}
        className="rounded-md mb-4 w-full shadow-[0_4px_20px_rgba(1,1,1,0.1)]"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500 mt-1 mb-4" style={{color:'gray'}} >{product.description}</p>
      <button className="text-blue-600 font-medium mt-20 hover:underline"
        style={{color:'#3674B5'}}>
        {product.linkText}
      </button>
    </div>
  ))}
</div>

    </div>
  );
};

export default ExploreProducts;