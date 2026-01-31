import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <div className="flex flex-col p-5 items-center justify-center mt-10">
      
      

      <div className="flex flex-col gap-6 lg:w-[900px] text-center items-center">
      
        <h1 className="text-4xl lg:text-6xl font-bold text-[#3A1212] capitalize mb-4">
          {name}
        </h1>
        
       
        <div className="text-lg lg:text-xl text-gray-700 leading-relaxed text-left bg-white p-8 rounded-2xl shadow-sm w-full">
          <h3 className="font-bold text-2xl mb-4 text-[#FF2625]">Instructions:</h3>
          
          
          {instructions?.length > 0 ? (
            <ol className="list-decimal pl-5 space-y-3">
              {instructions.map((item, index) => (
                <li key={index} className="pl-2">
                  {item}
                </li>
              ))}
            </ol>
          ) : (
             <p>
              Exercises keep you strong. <span className="capitalize font-bold text-[#FF2625]">{name}</span>{' '}
              is one of the best exercises to target your <span className="capitalize font-bold text-[#FF2625]">{target}</span>.
            </p>
          )}
        </div>

       
        <div className="flex flex-wrap gap-8 justify-center mt-6">
          {extraDetail.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="bg-[#fff2db] rounded-full p-4 w-[80px] h-[80px] flex justify-center items-center shadow-sm">
                <img src={item.icon} alt={item.name} className="w-[40px] h-[40px]" />
              </div>
              <h5 className="text-lg capitalize text-gray-700 font-medium">
                {item.name}
              </h5>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Detail;