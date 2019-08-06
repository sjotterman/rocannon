import React from 'react';

const renderList = (items, removeItem) => {
  return items.map(item => {
    const { id, name } = item;

    return (
      <div className="listItem" id={`item_${id}`} key={id}>
        {name}
        <div className="closeItem" onClick={() => removeItem(id)}>
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
