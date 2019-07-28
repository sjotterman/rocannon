import React, { useState } from 'react';
import InitialList from './InitialList';

const Selector = () => {
  const [choices, setChoices] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          const id = itemIndex;
          const newItem = { id, name: inputValue };
          setChoices([...choices, newItem]);
          setInputValue('');
          setItemIndex(itemIndex + 1);
        }}
      >
        <input
          type="text"
          id="itemInput"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <input type="submit" value="Add" />
      </form>

      <InitialList
        items={choices}
        removeItem={id => {
          const newChoices = choices.filter(item => item.id !== id);
          setChoices(newChoices);
        }}
      />
    </>
  );
};

export default Selector;
