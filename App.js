import React from 'react';
import MealForm from './components/MealForm';
import WorkoutForm from './components/WorkoutForm';
import './App.css'; // You can keep this if you want general styles

function App() {
  return (
    <div className="App">
      <h1 style={{ color: '#00c3ff', textShadow: '0 0 8px #00c3ff' }}>Fitness Tracker</h1>
      <MealForm />
      <WorkoutForm />
    </div>
  );
}

export default App;