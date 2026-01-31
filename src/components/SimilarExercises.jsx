import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="mt-[100px] p-5">
      
      
      <h3 className="font-bold text-3xl mb-5 text-[#000]">
        Exercises that target the same <span className="text-[#FF2625] capitalize">muscle group</span>
      </h3>
      <div className="relative w-full p-2 mb-20">
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises} /> 
          : <div className="text-xl">Loading...</div>
        }
      </div>

      
      <h3 className="font-bold text-3xl mb-5 text-[#000]">
        Exercises that use the same <span className="text-[#FF2625] capitalize">equipment</span>
      </h3>
      <div className="relative w-full p-2">
        {equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises} /> 
          : <div className="text-xl">Loading...</div>
        }
      </div>

    </div>
  );
};

export default SimilarExercises;