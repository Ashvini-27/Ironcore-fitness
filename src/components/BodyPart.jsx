import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      type="button"
      className="bg-white border-b-4 border-transparent hover:border-[#FF2625] rounded-bl-[20px] 
                 cursor-pointer w-[270px] h-[280px] m-auto flex flex-col items-center justify-center 
                 gap-10 shadow-lg hover:scale-105 transition-all duration-300"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbbell" className="w-10 h-10" />
      <h2 className="text-2xl font-bold text-[#3A1212] capitalize">{item}</h2>
    </div>
  );
};

export default BodyPart;