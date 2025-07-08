import React from 'react'

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const resources = Array(9).fill().map((_, i) => ({
  id: i + 1,
  level: i % 3 === 0 ? 'Easy' : i % 3 === 1 ? 'Medium' : 'Hard',
  title: 'Design a Free Food App',
  category: 'DATA STRUCTURES & ALGORITHMS',
  description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
}));

const levelStyles = {
  Easy: { backgroundColor: '#3674B5', color: 'white' },
  Medium: { backgroundColor: 'orange', color: 'white' },
  Hard: { backgroundColor: '#06923E', color: 'white' },
};

const InterviewResources = () => {
  const [search, setSearch] = useState('');

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='max-w-6xl mx-auto px-4 py-10 font-sora'>

      <h1 className='text-2xl font-semibold text-center'>Technical Interview Resources</h1>
      <p className='text-gray-500 text-center mt-1'>Find all the technical interview resources here</p>


      <div className='relative max-w-xl mx-auto mt-6'>
        <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
        <input
          type='text'
          placeholder='Search for resource here'
          className='w-full pl-10 pr-4 py-2 rounded-full  focus:outline-none '
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{background:"#f2f2f2"}}
        />
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {filteredResources.map(resource => (
          <div key={resource.id} className='rounded-l p-4 shadow-sm bg-white hover:shadow-md transition-shadow' style={{border:'0.5px solid gray'}}>
   
            <div className='flex items-center gap-2 text-xs font-medium mb-2'>
              <span 
                className="px-2 py-1 rounded"
                style={levelStyles[resource.level]}
              >
                {resource.level}
              </span>
              <span className='uppercase text-gray-400 tracking-wide' style={{color:'gray'}}>{resource.category}</span>
            </div>


            <h2 className='text-base font-semibold'>{resource.title}</h2>

            <p className='text-sm text-gray-600 mt-2'style={{color:'gray'}}>
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewResources;