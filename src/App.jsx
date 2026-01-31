import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import ExercisesPage from './pages/ExercisesPage';
import BMIPage from './pages/BMIPage';        
import CaloriePage from './pages/CaloriePage';  

const App = () => {
  return (
    <div className="w-full m-auto overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        
        
        <Route path="/bmi" element={<BMIPage />} />
        <Route path="/calories" element={<CaloriePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;