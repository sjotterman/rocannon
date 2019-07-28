import React, { useState } from 'react';
import InitialList from './InitialList';

const Selector = () => {
  const [choices, setChoices] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        type="text"
        id="itemInput"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={() => {
          setChoices([...choices, inputValue]);
          setInputValue('');
        }}
      >
        Add
      </button>

      <InitialList items={choices} />
    </>
  );
};

export default Selector;
