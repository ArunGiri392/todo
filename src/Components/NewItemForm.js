// NewItemForm.js
import React, { useState } from 'react';

function NewItemForm({ onAdd }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return; // Prevent adding empty items
    onAdd(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
          type="text" 
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

export default NewItemForm;
