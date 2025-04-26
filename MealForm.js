import React from 'react';
import './NeonForm.css';

const MealForm = () => {
  return (
    <div className="meal-container">
      <div className="top-bar">Log Meal</div>

      <div className="card">
        <label className="label">What did you eat?</label>
        <input type="text" placeholder="Search or enter item" />

        <label className="label">How much?</label>
        <div className="row">
          <input type="number" placeholder="1" />
          <select>
            <option>cup</option>
            <option>grams</option>
            <option>piece</option>
          </select>
        </div>

        <label className="label">When did you eat?</label>
        <input type="time" />

        <label className="label">Calories (Optional)</label>
        <input type="number" placeholder="250" />

        <label className="label">Macronutrients (Optional)</label>
        <div className="macro-row">
          <input type="number" placeholder="Protein (g)" />
          <input type="number" placeholder="Carbs (g)" />
          <input type="number" placeholder="Fat (g)" />
        </div>

        <label className="label">Add Photo (Optional)</label>
        <div className="camera-btn">📷 Add Photo</div>

        <label className="label">Meal Type</label>
        <div className="meal-type">
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Snack</button>
        </div>

        <label className="label">Notes (Optional)</label>
        <textarea rows="3" placeholder="Add any extra notes..." />

        <button className="save-btn">Save Meal</button>
      </div>
    </div>
  );
};

export default MealForm;