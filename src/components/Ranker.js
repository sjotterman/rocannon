import React, { useState } from 'react';
import RankerList from './RankerList';

class Ranker extends React.Component {
  render() {
    const { listItems } = this.props;
    return <RankerList
      items={listItems}
      removeItem={() => {
      }}
    />
  }
}
export default Ranker;
