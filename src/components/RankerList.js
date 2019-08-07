import React from 'react';
import { voteUp, voteDown } from '../utils/Vote';

const renderList = (items, setChoices) => {
  let counter = 0;
  return items.map(item => {
    const { id, name } = item;
    const itemCounter = counter;
    counter++;

    return (
      <div className="listItem" id={`item_${itemCounter}`} key={id}>
        {name}
        <div className="voteButtons">
          <div className="voteItemUp" onClick={() => setChoices(voteUp(items, id))}>
            up
        </div>
          <div className="voteItemDown" onClick={() => setChoices(voteDown(items, id))}>
            down
        </div>
        </div>
      </div>
    );
  });
};

const RankerList = props => {
  const { items, setChoices } = props;

  return <div>{renderList(items, setChoices)}</div>;
};

export default RankerList;