import React from 'react';
import { Link } from 'react-router-dom';


import SitUpImage from '../assets/images/situp.gif'; 
import SideBendImage from '../assets/images/sidebend.gif'; 

const ExerciseCard = ({ exercise }) => {

  
  const localImages = {
    '0001': SitUpImage,     
    '0002': SideBendImage,   
    
  };

 
  const imageSrc = localImages[exercise.id] || exercise.gifUrl;

  return (
    <Link className="group" to={`/exercise/${exercise.id}`}>
      <div className="bg-white border border-white/50 rounded-2xl w-[270px] sm:w-[350px] p-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
        
        <img 
          src={imageSrc} 
          alt={exercise.name} 
          loading="lazy" 
          className="h-[300px] w-full object-cover rounded-xl mb-4"
        />

        <div className="flex gap-4 mb-4 w-full justify-start">
          <button className="text-white bg-[#6366F1] text-[14px] rounded-full px-4 py-1 capitalize hover:bg-[#4f46e5] transition shadow-md">
            {exercise.bodyPart}
          </button>
          <button className="text-white bg-[#F59E0B] text-[14px] rounded-full px-4 py-1 capitalize hover:bg-[#d97706] transition shadow-md">
            {exercise.target}
          </button>
        </div>

        
        <h3 className="text-gray-800 font-bold text-xl sm:text-2xl capitalize truncate group-hover:text-[#6366F1] transition-colors w-full text-left">
          {exercise.name}
        </h3>
      </div>
    </Link>
  );
};

export default ExerciseCard;