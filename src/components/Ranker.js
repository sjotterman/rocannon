import React, { useState } from 'react';
import RankerList from './RankerList';

class Ranker extends React.Component {
  render() {
    const { listItems, setChoices } = this.props;
    return <RankerList
      items={listItems}
      setChoices={setChoices}
    />
  }
}
export default Ranker;
