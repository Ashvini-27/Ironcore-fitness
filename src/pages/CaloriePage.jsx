import React, { useState } from 'react';

const CaloriePage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(1.2);
  const [result, setResult] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (weight && height && age) {
      let bmr = (10 * weight) + (6.25 * height) - (5 * age);
      bmr += gender === 'male' ? 5 : -161;
      const maintenance = Math.round(bmr * activity);
      setResult({
        maintenance: maintenance,
        loss: maintenance - 500,
        gain: maintenance + 500
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-10">
      
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl w-[90%] md:w-[800px] border-t-8 border-[#6366F1]">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Calorie Calculator</h1>
        
        <form onSubmit={calculateCalories} className="flex flex-col gap-6">
          
          <div className="flex gap-4">
            <label className={`flex-1 p-4 border rounded-xl text-center cursor-pointer transition font-bold ${gender === 'male' ? 'bg-[#6366F1] text-white shadow-lg' : 'bg-gray-50 text-gray-500'}`}>
              <input type="radio" name="gender" value="male" className="hidden" checked={gender === 'male'} onChange={() => setGender('male')} />
              Male
            </label>
            <label className={`flex-1 p-4 border rounded-xl text-center cursor-pointer transition font-bold ${gender === 'female' ? 'bg-[#6366F1] text-white shadow-lg' : 'bg-gray-50 text-gray-500'}`}>
              <input type="radio" name="gender" value="female" className="hidden" checked={gender === 'female'} onChange={() => setGender('female')} />
              Female
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full md:w-1/3 p-4 border border-gray-200 rounded-xl text-lg bg-gray-50 focus:ring-[#6366F1] focus:outline-none focus:ring-2" />
            <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full md:w-1/3 p-4 border border-gray-200 rounded-xl text-lg bg-gray-50 focus:ring-[#6366F1] focus:outline-none focus:ring-2" />
            <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full md:w-1/3 p-4 border border-gray-200 rounded-xl text-lg bg-gray-50 focus:ring-[#6366F1] focus:outline-none focus:ring-2" />
          </div>
          
          <select value={activity} onChange={(e) => setActivity(Number(e.target.value))} className="p-4 border border-gray-200 rounded-xl text-lg bg-gray-50 w-full focus:ring-[#6366F1] focus:outline-none focus:ring-2">
            <option value={1.2}>Sedentary (Office job, little exercise)</option>
            <option value={1.375}>Light Exercise (1-2 days/week)</option>
            <option value={1.55}>Moderate Exercise (3-5 days/week)</option>
            <option value={1.725}>Heavy Exercise (6-7 days/week)</option>
            <option value={1.9}>Athlete (2x per day)</option>
          </select>

          <button type="submit" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-4 rounded-xl text-xl font-bold hover:shadow-xl transition-all shadow-md transform hover:-translate-y-1 w-full">
            Calculate My Goals
          </button>
        </form>

        {result && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-200 text-center shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-yellow-700 mb-2">Weight Loss</h3>
              <p className="text-4xl font-extrabold text-gray-800 mb-2">{result.loss}</p>
              <p className="text-sm text-gray-500">kcal / day</p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl border-2 border-green-400 text-center shadow-lg transform scale-105">
              <h3 className="text-xl font-bold text-green-700 mb-2">Maintenance</h3>
              <p className="text-4xl font-extrabold text-gray-800 mb-2">{result.maintenance}</p>
              <p className="text-sm text-gray-500">kcal / day</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 text-center shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Muscle Gain</h3>
              <p className="text-4xl font-extrabold text-gray-800 mb-2">{result.gain}</p>
              <p className="text-sm text-gray-500">kcal / day</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaloriePage;