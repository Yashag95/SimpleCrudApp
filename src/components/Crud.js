import React, { useState } from 'react';
import './Crud.css'; 

const Crud = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {

        const updatedItems = [...items];
        updatedItems[editIndex] = inputValue;
        setItems(updatedItems);
        setEditIndex(null);
      } else {

        setItems([...items, inputValue]);
      }
      setInputValue('');
    }
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setInputValue(items[index]);
  };

  return (
    <div className="list-app">
      <h1>Simple List App</h1>
      <div className="input-container">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Action</th>
          </tr>
        </thead>
        
          {items.map((item, index) => (
            <tr key={index}>
              <td>{editIndex === index ? <input type="text" value={inputValue} onChange={handleInputChange} /> : item}</td>
              <td>
                {editIndex === index ? (
                  <button onClick={() => handleAddItem()} style={{ color: "white", backgroundColor: "black" }}>Update</button>
                ) : (
                  <button onClick={() => handleEditItem(index)} style={{ color: "white", backgroundColor: "black" }}>✏️</button>
                )}
              </td>
            </tr>
          ))}
        
      </table>
    </div>
  );
};

export default Crud;
