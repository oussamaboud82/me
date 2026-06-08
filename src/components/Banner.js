import React from 'react';

 import { FiGithub,FiLinkedin,FiInstagram,} from 'react-icons/fi'

import { TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Banner = () => {

  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='Home'>
<div className='container mx-auto'>
<div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-12'>


<div className='flex-1 text-center font-secondary lg:text-left'>

<motion.h1 
variants={fadeIn('up',0.7)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.7}}
 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>oussama <span>boud</span></motion.h1>
<motion.div
variants={fadeIn('up',0.3)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.7}}
 
className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] '>
  <span className='mr-4 text-white'>i am a</span>
  <TypeAnimation sequence={[
    "devloper",2000,]}
   speed={20}
   className='text-accent'
  wrapper='span'
  repeat={Infinity}/>
 </motion.div>
  < motion.p
  variants={fadeIn('up',0.7)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.7}}
  
  className='mb-8 max-w-lg mx-auto lg:mx-0'>
    LTW elements are supported by an extensive
     Material Design color system that themes our 
    more comprehensive  
     .</motion.p>
  
     <motion.div 
     variants={fadeIn('up',0.7)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.7}}
     
     
     
     className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
      <button 
  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ou2484246@gmail.com', '_blank')}
  className='btn btn-lg '
>
  contact
</button>
      <a href='#' className='text-gradient btn-link '>me</a>
     </motion.div>
    
     <motion.div
     variants={fadeIn('up',0.7)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.7}}
  
     className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'> 
<a href='https://github.com/oussamaboud82/me' target='_blank' rel='noopener noreferrer'><FiGithub/></a>
<a href='#'><FiLinkedin/> </a>
<a href='https://www.instagram.com/ousama_10_25/?utm_source=ig_web_button_share_sheet'><FiInstagram/></a>
  </motion.div>
     </div>
     




< motion.div
variants={fadeIn('down',0.7)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.7}}

className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
  <img
    src={'/banner-illustration.png'}
    alt='Developer illustration'
    onError={(e)=>{ e.currentTarget.style.display = 'none'; }}
    className='w-full h-auto object-contain'
  />
</motion.div>


</div>











</div>

  </section> 
  
  
  
  
  
  
  
 
};

export default Banner;
