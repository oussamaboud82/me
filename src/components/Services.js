import React from 'react';
import CircularGallery from './CircularGallery';
import {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12} from '../assets';

const MySkills = () => {
  const skillsItems = [
    { image: p12, text: 'React' },
    { image: p2, text: 'GitHub' },
    { image: p1, text: 'JavaScript' },
    { image: p3, text: 'Node.js' },
    { image: p4, text: 'CSS3' },
    { image: p5, text: 'Laravel' },
    { image: p6, text: 'Linux' },
    { image: p7, text: 'MySQL' },
    { image: p8, text: 'Git' },
    { image: p9, text: 'HTML5' },
    { image: p10, text: 'Tailwind CSS' },
    { image: p11, text: 'WordPress' }
  ];

  return (
    <div className='section' id='MySkills'>
      
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery 
            bend={0.5} 
            textColor="#ffffff" 
            borderRadius={0.08} 
            scrollEase={0.08}
            items={skillsItems}
          />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
