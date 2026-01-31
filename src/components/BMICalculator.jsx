import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setMessage("Fuel up! Your journey to strength starts with good food. 💪");
      else if (bmiValue < 24.9) setMessage("Great balance! Keep maintaining your healthy lifestyle. 🌟");
      else if (bmiValue < 29.9) setMessage("Keep moving! Small steps every day lead to big changes. 🏃‍♂️");
      else setMessage("You are stronger than you think. Let's prioritize health today! ❤️");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-[48%] border-t-4 border-[#FF2625]">
      <h2 className="text-2xl font-bold mb-6 text-[#3A1212]">BMI Calculator</h2>
      
      <form onSubmit={calculateBMI} className="flex flex-col gap-4">
        <input 
          type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2625]"
        />
        <input 
          type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2625]"
        />
        <button type="submit" className="bg-[#FF2625] text-white py-3 rounded-lg font-bold hover:bg-[#ff5555] transition">
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <div className="mt-6 text-center">
          <p className="text-xl font-bold">Your BMI: <span className="text-[#FF2625]">{bmi}</span></p>
          <p className="mt-2 text-gray-600 italic">"{message}"</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;