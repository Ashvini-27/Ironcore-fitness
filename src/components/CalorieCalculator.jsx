import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(1.2);
  const [calories, setCalories] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (weight && height && age) {
      // Mifflin-St Jeor Equation
      let bmr = (10 * weight) + (6.25 * height) - (5 * age);
      bmr += gender === 'male' ? 5 : -161;
      
      const tdee = Math.round(bmr * activity);
      setCalories(tdee);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-[48%] border-t-4 border-[#FF2625]">
      <h2 className="text-2xl font-bold mb-6 text-[#3A1212]">Daily Calories</h2>
      
      <form onSubmit={calculateCalories} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="p-3 border rounded-lg w-1/2">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input 
            type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}
            className="p-3 border rounded-lg w-1/2"
          />
        </div>
        <div className="flex gap-4">
          <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="p-3 border rounded-lg w-1/2" />
          <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="p-3 border rounded-lg w-1/2" />
        </div>
        
        <select value={activity} onChange={(e) => setActivity(Number(e.target.value))} className="p-3 border rounded-lg">
          <option value={1.2}>Sedentary (Office job)</option>
          <option value={1.375}>Light Exercise (1-2 days/week)</option>
          <option value={1.55}>Moderate Exercise (3-5 days/week)</option>
          <option value={1.725}>Heavy Exercise (6-7 days/week)</option>
        </select>

        <button type="submit" className="bg-[#FF2625] text-white py-3 rounded-lg font-bold hover:bg-[#ff5555] transition">
          Calculate Calories
        </button>
      </form>

      {calories && (
        <div className="mt-6 text-center">
          <p className="text-xl font-bold">Maintenance: <span className="text-[#FF2625]">{calories} kcal</span></p>
          <p className="mt-2 text-gray-600 italic">"Consistency is the key to progress!"</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;