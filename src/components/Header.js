import React from 'react';

const Header = () => {
  return <header  className='py-4'> 
  
  <div className='container mx-auto'>

<div className='flex justify-between items-center'>

<a href="#" className='text-4xl font-bold text-white hover:text-gradient transition-colors'>
  me
</a>

<button 
  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ou2484246@gmail.com', '_blank')}
  className='btn btn-sm'
>
  contact me
</button>


</div>



  </div>
  
  
  
  
  
  
  
  
  
  
  
  </header> 

 
};

export default Header;
