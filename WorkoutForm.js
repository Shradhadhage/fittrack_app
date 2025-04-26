import React from 'react';
import './NeonForm.css';

const WorkoutForm = () => {
  return (
    <div className="workout-container"> {/* Changed class name here */}
      <div className="icon">🏋️</div>
      <h1 className="top-bar">WORKOUT LOG FORM</h1>

      <div className="card">
        <label className="label">Date:</label>
        <input type="text" />

        <label className="label">Day of the Week:</label>
        <input type="text" />

        <label className="label">Workout Type:</label>
        <div className="checkboxes">
          <label><input type="checkbox" /> Strength Training</label>
          <label><input type="checkbox" /> Cardio</label>
          <label><input type="checkbox" /> HIIT</label>
          <label><input type="checkbox" /> Flexibility</label>
          <label><input type="checkbox" /> Other:</label>
          <input type="text" />
        </div>

        <label className="label">✅ Warm-Up</label>
        <label className="label">Duration:</label>
        <input type="text" />
        <label className="label">Description:</label>
        <input type="text" />

        <label className="label">🔹 Exercise Log</label>
        <table>
          <thead>
            <tr>
              <th>Exercise Name</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Weight</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>

        <label className="label">💦 Cool Down</label>
        <label className="label">Duration:</label>
        <input type="text" />
        <label className="label">Description:</label>
        <input type="text" />

        <label className="label">Energy Level (1-10):</label>
        <input type="number" min="1" max="10" />
        <div className="mood-icons">😊 😐 😩</div>

        <label className="label">Goals for Next Workout:</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default WorkoutForm;