import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/images/banner.jpg'; 

const HeroBanner = () => {
  return (
    <section className="relative p-5 md:p-20 mt-10 md:mt-0 lg:ml-10 min-h-[80vh] flex items-center">
      
      <div className="z-20 relative">
        <h3 className="text-[#6366F1] font-bold text-4xl mb-4 tracking-wide uppercase">
          IRONCORE 🥇
        </h3>

        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-5xl mb-8 leading-tight text-gray-800">
          <span className="text-gradient">Train Smart,Get Stronger</span> <br /> Every Day
        </h1>

        <p className="text-lg font-medium mb-8 text-gray-600 leading-relaxed max-w-[500px]">
          Check out the most effective exercises  just for you.
        </p>

        <Link 
          to="/exercises" 
          className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg inline-block"
        >
          Explore Exercises
        </Link>
      </div>

      
      <img 
        src={HeroImg} 
        alt="banner" 
        className="hidden md:block absolute right-0 top-0 w-[50%] h-[700px] object-cover z-10 rounded-bl-[150px] shadow-2xl border-b-4 border-l-4 border-white/30"
      />

     
      <h1 className="font-bold text-[100px] md:text-[200px] text-gray-400 opacity-10 absolute bottom-0 left-20 -z-10 hidden md:block select-none">
        GYM
      </h1>

    </section>
  );
};

export default HeroBanner;