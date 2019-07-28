import React from 'react';

const renderList = items => {
  return items.map(item => {
    return <li key={item}>{item}</li>;
  });
};

const InitialList = props => {
  const { items } = props;

  return (
    <>
      <ul>{renderList(items)}</ul>
    </>
  );
};

export default InitialList;
