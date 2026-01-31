import React, { useState } from 'react';

const BMIPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  const [categoryColor, setCategoryColor] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory("Underweight");
        setCategoryColor("text-yellow-500");
        setMessage("Time to fuel up! Eat nutrient-dense foods to build strength. 💪");
      } 
      else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory("Healthy Weight");
        setCategoryColor("text-green-600");
        setMessage("Perfect balance! Keep maintaining your amazing lifestyle. 🌟");
      } 
      else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setCategory("Overweight");
        setCategoryColor("text-orange-500");
        setMessage("Let's get moving! Small active changes make a big difference. 🏃‍♂️");
      } 
      else {
        setCategory("Obese");
        setCategoryColor("text-red-600");
        setMessage("You are capable of change. Let's prioritize healthy habits today! ❤️");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-10">
      
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[90%] md:w-[500px] border-t-8 border-[#6366F1]">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">BMI Calculator</h1>
        
        <form onSubmit={calculateBMI} className="flex flex-col gap-6">
          
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

          <div className="flex gap-4">
            <input 
              type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)}
              className="w-1/2 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366F1] text-lg bg-gray-50"
            />
            <input 
              type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)}
              className="w-1/2 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366F1] text-lg bg-gray-50"
            />
          </div>

          <button type="submit" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-4 rounded-xl text-xl font-bold hover:shadow-xl transition-all shadow-md transform hover:-translate-y-1">
            Calculate Now
          </button>
        </form>

        {bmi && (
          <div className="mt-10 text-center p-6 bg-indigo-50 rounded-xl border border-indigo-100">
            <p className="text-xl font-bold text-gray-500 uppercase tracking-wide">Your Result</p>
            <p className="text-6xl font-black text-gray-800 my-2">{bmi}</p>
            <p className={`text-3xl font-bold mb-4 ${categoryColor}`}>{category}</p>
            <div className="h-[1px] bg-gray-300 w-full mb-4 opacity-50"></div>
            <p className="text-lg text-gray-600 italic">"{message}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMIPage;