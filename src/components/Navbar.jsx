import React, { useState, useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import GymBeat from '../assets/music/beat.mp3'; 

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25; 
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-5 py-5 mt-5 max-w-[1200px] m-auto">
      
      <audio ref={audioRef} loop>
        <source src={GymBeat} type="audio/mp3" />
      </audio>

      <Link to="/">
        <img 
          src={Logo} 
          alt="logo" 
          className="w-12 h-12 my-0 mx-5 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-md" 
        />
      </Link>

      <div className="flex gap-8 text-xl items-center mt-5 sm:mt-0 font-semibold text-gray-700">
        
        <Link to="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <Link to="/exercises" className="hover:text-[#6366F1] transition-colors">Exercises</Link>
        <Link to="/bmi" className="hover:text-[#6366F1] transition-colors">BMI</Link>
        <Link to="/calories" className="hover:text-[#6366F1] transition-colors">Calories</Link>

       
        <button 
          onClick={toggleMusic}
          className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 shadow-md ${
            isPlaying 
              ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-indigo-500/50 hover:scale-110' 
              : 'bg-white border border-gray-200 text-gray-400 hover:border-[#6366F1] hover:text-[#6366F1]'
          }`}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping"></span>
          )}

          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 z-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
          )}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;