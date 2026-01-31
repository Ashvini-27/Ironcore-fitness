import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 lg:mt-48 p-5">
      <h1 className="font-bold text-4xl sm:text-5xl mb-12 text-center text-[#3A1212]">
        Awesome Exercises <br /> You Should Know
      </h1>

      <div className="relative mb-16 w-full flex justify-center">
        <input
          className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] h-[50px] sm:h-[65px] 
                     bg-white border-none rounded-l-lg text-lg px-6 
                     focus:outline-none focus:ring-2 focus:ring-[#FF2625] shadow-md"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <button
          className="bg-[#FF2625] text-white w-[100px] sm:w-[150px] h-[50px] sm:h-[65px] 
                     rounded-r-lg text-lg font-medium 
                     hover:bg-[#ff5555] transition-colors shadow-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      

<div className="relative w-full p-5">
  <HorizontalScrollbar 
    data={bodyParts} 
    bodyPart={bodyPart} 
    setBodyPart={setBodyPart} 
    isBodyParts 
  />
</div>
    </div>
  );
};

export default SearchExercises;