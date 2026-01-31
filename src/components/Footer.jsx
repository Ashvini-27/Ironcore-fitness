import React from 'react';
import Logo from '../assets/icons/body-part.png'; 

const Footer = () => {
  return (
    <div className="mt-20 bg-[#fff3f4]">
      <div className="flex flex-col gap-10 items-center px-10 py-10">
        
        
        <img src={Logo} alt="logo" className="w-[200px] h-[40px] object-contain" />
        
        
        <h5 className="text-2xl pb-10 font-medium text-[#3A1212]">
          Made with ❤️ by Ashvini
        </h5>
      </div>
    </div>
  );
};

export default Footer;