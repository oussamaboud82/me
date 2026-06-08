import React from 'react';
import MagicBento from './MagicBento';

const Work = () => {
  return (
    <div className='section' id='Work'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          enableMobileAnimations={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
};

export default Work;
