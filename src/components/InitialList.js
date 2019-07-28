import React from 'react';

const renderList = (items, removeItem) => {
  return items.map(item => {
    return (
      <div className="ListItem" id={`item_${item.id}`} key={item.id}>
        {item.name}
        <div className="CloseItem" onClick={() => removeItem(item.id)}>
          X
        </div>
      </div>
    );
  });
};

const InitialList = props => {
  const { items, removeItem } = props;

  return <div>{renderList(items, removeItem)}</div>;
};

export default InitialList;
