import React, { useState } from 'react';

function KeeperApp() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Noteing</h1>
      <input
        type="text"
        placeholder="Enter your note"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddNote}>Add</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => handleDeleteNote(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KeeperApp;
