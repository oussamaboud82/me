import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaTelegram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import LogoLoop from './LogoLoop';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const socialLogos = [
    { 
      node: <FaInstagram className="text-pink-500" />, 
      title: "Instagram", 
      href: "https://www.instagram.com/ousama_10_25/?utm_source=ig_web_button_share_sheet" 
    },
    { 
      node: <FaTwitter className="text-blue-400" />, 
      title: "Twitter", 
      href: "https://twitter.com" 
    },
    { 
      node: <FaGithub className="text-gray-300" />, 
      title: "GitHub", 
      href: "https://github.com/oussamaboud82/me" 
    },
    { 
      node: <FaLinkedin className="text-blue-600" />, 
      title: "LinkedIn", 
      href: "https://linkedin.com" 
    },
    { 
      node: <FaFacebook className="text-blue-500" />, 
      title: "Facebook", 
      href: "https://facebook.com" 
    },
    { 
      node: <FaYoutube className="text-red-500" />, 
      title: "YouTube", 
      href: "https://youtube.com" 
    },
    { 
      node: <FaTelegram className="text-blue-400" />, 
      title: "Telegram", 
      href: "https://web.telegram.org/k/" 
    },
    { 
      node: <FaWhatsapp className="text-green-500" />, 
      title: "WhatsApp", 
      href: "https://wa.me" 
    },
  ];

  return (
    <div className='section' id='Contact'>
      <div className='container mx-auto py-20'>
        <h2 className='text-4xl font-bold text-center mb-4 text-gradient'>Connect With Me</h2>
        <p className='text-center text-white mb-12 max-w-2xl mx-auto'>
          Follow me on social media platforms to stay updated with my latest projects and activities
        </p>
        
        <div className='relative h-32 mb-16'>
          <LogoLoop
            logos={socialLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={60}
            hoverSpeed={20}
            scaleOnHover={true}
            fadeOut={false}
            ariaLabel="Social media links"
          />
        </div>

        <div className='text-center'>
          <h3 className='text-2xl font-semibold mb-6 text-white'>Back to Top</h3>
          <div className='flex justify-center items-center max-w-md mx-auto'>
            <button 
              onClick={scrollToTop}
              className='btn btn-lg w-full sm:w-auto flex items-center gap-2'
            >
              <FaArrowUp />
              Scroll to Top
            </button>
          </div>
          <p className='text-sm text-gray-400 mt-4'>
            Navigate back to the top of the portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
