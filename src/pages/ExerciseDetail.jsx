import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises'; 

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]); 
  const [equipmentExercises, setEquipmentExercises] = useState([]);       
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      
      const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
          'X-RapidAPI-Key': exerciseOptions.headers['X-RapidAPI-Key']
        }
      };

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      if (exerciseVideosData.contents) {
        setExerciseVideos(exerciseVideosData.contents);
      }

    
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div className="mt-10 lg:mt-24">
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      
      
      <SimilarExercises 
        targetMuscleExercises={targetMuscleExercises} 
        equipmentExercises={equipmentExercises} 
      />
    </div>
  );
};

export default ExerciseDetail;