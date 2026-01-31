import React from 'react';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard'; 


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <div className="flex overflow-x-auto gap-8 py-5 px-5 scrollbar-hide w-full">
      {data.map((item) => (
        <div 
          key={item.id || item}
          title={item.id || item}
          className="min-w-[270px]"
        >
          
          {isBodyParts ? (
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;