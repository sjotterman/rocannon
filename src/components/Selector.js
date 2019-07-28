import React, { useState } from 'react';
import InitialList from './InitialList';

const Selector = ({ onFinish }) => {
  const [choices, setChoices] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (inputValue === '') return;
          const id = itemIndex;
          const newItem = { id, name: inputValue };
          setChoices([...choices, newItem]);
          setInputValue('');
          setItemIndex(itemIndex + 1);
        }}
      >
        <div id="itemAdd">
          <input
            type="text"
            id="itemInput"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
          />
          <input id="addButton" type="submit" value="Add" />
        </div>
        <div id="done">
          <button id="doneButton" type="button" onClick={() => onFinish()}>
            Done Adding
          </button>
        </div>
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
