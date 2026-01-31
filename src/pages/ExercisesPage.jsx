import React, { useState } from 'react';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const ExercisesPage = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div className="mt-10">
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        exercises={exercises} 
      />
    </div>
  );
};

export default ExercisesPage;