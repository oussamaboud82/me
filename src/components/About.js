import React from 'react';
import CountUp  from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import aboutImg from '../assets/oussama.png';
import ProfileCard from './ProfileCard';

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isHighRefreshRate, setIsHighRefreshRate] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    const checkRefreshRate = () => {
      // Detect high refresh rate displays (120Hz+)
      const testElement = document.createElement('div');
      testElement.style.animation = 'test 1s steps(60)';
      testElement.innerHTML = '<style>@keyframes test { to { transform: translateX(1px); } }</style>';
      document.body.appendChild(testElement);
      
      setTimeout(() => {
        const computedStyle = window.getComputedStyle(testElement);
        const animationDuration = parseFloat(computedStyle.animationDuration);
        document.body.removeChild(testElement);
        
        // If animation completes faster than expected, likely high refresh rate
        setIsHighRefreshRate(animationDuration < 0.95 || window.matchMedia('(min-resolution: 120dpi)').matches);
      }, 100);
    };
    
    checkMobile();
    checkRefreshRate();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile, isHighRefreshRate };
};

const mobile120HzVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    scale: 0.85,
    rotateX: -5
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for smooth 120Hz
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 0.8
    }
  }
};

const mobileStandardVariants = {
  hidden: { 
    opacity: 0,
    y: 80,
    scale: 0.9
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

const About = () => {
  const [ref, inView] = useInView({
      threshold:0.5,
    });
  const { isMobile, isHighRefreshRate } = useMobileDetection();
  
  const getVariants = () => {
    if (isMobile && isHighRefreshRate) return mobile120HzVariants;
    if (isMobile) return mobileStandardVariants;
    return fadeIn('up', 0.5);
  };
  
 return (
   <motion.section 
    ref={ref} 
    className='section' id='about'
    variants={getVariants()}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.3}}
   >

<div className='container mx-auto'>
  <div className='flex flex-col lg:flex-row items-start gap-10'>
  <div className='flex-shrink-0 w-full lg:w-auto flex justify-center items-center my-6'>
    <ProfileCard
      name="oussama-boud"
      title="devloper full-stack"
      handle="ousama-10-25"
      status="Online"
     contactText="Contact Me"
      avatarUrl={aboutImg}
      showUserInfo={true}
      enableTilt={true}
      enableMobileTilt={false}
      onContactClick={() => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ou2484246@gmail.com', '_blank');
      }}
      onCardClick={() => {
        const instagramUrl = 'https://www.instagram.com/ousama_10_25';
        window.open(instagramUrl, '_blank', 'noopener,noreferrer');
      }}
    />
  </div>

<motion.div
 variants={fadeIn('up',0.5)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.5}}
   
   className='flex-1'>
<motion.h2 
 variants={fadeIn('up',0.5)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.5}}
   


className='text-3xl font-bold mb-1 text-gradient '>About Me </motion.h2> 
<motion.h2

 variants={fadeIn('up',0.5)} 
initial="hidden" 
whileInView={"show"} 
viewport={{once:false,amount:0.5}}
   


className='mb-6 '>i am front-end and back-end devloper with 2 years of experience</motion.h2>

<p className='text-base text-white mb-12'>
  I’m a freelance full‑stack web developer, working across both backend and frontend. I build robust APIs,
  scalable server-side logic, and polished,<br/>
   responsive user interfaces. I have 2
    years of hands-on experience<br/>
  delivering modern web applications for clients.
</p>

<div className='flex flex-row flex-wrap gap-x-10 justify-start items-end mb-8'>
<div className='flex items-end gap-3'>
 
 <div className='text-[40px] font-tertiary text-gradient mb-2'> 
 {inView ? <CountUp start={0} end={3} duration={10}/> :null}
</div>
<div className='font-primary text-sm tracking-[2px]'>Years of <br/>  experience </div>
</div>  


 
 <div className='flex items-end gap-3'>
 <div className='text-[40px] font-tertiary text-gradient mb-2'> 
 {inView ? <CountUp start={0} end={4} duration={5}/> :null}

</div>
<div className='font-primary text-sm tracking-[2px]  '>projects <br/> completed </div>
</div>  




 <div className='flex items-end gap-3'>
 <div className='text-[40px] font-tertiary text-gradient mb-2'> 
 {inView ? <CountUp start={0} end={10} duration={5}/> :null}
</div>
<div className='font-primary text-sm tracking-[2px]'>satified <br/>  clients </div>
</div>  
</div>

<button 
  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ou2484246@gmail.com', '_blank')}
  className='btn btn-sm'
>
  contact me
</button>
</motion.div>
</div>
</div>   
















 












   </motion.section>
 );
};

export default About;
