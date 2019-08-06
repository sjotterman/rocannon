import React, { useState } from 'react';
import './App.css';
import Selector from './components/Selector';
import Ranker from './components/Ranker';


function App() {
  const [stage, setStage] = useState('entry');

  const items = [
    {
      id: 1,
      name: "Waffle House"
    },
    {
      id: 2,
      name: "Sam's Freezer"
    },
    {
      id: 3,
      name: "Taco Bell"
    }
  ]

  return (
    <div className="App">
      {stage === 'entry' && (
        <Selector
          onFinish={() => {
            setStage('ranker');
          }}
        />
      )}
      {stage === 'ranker' && <Ranker listItems={items} />}
    </div>
  );
}

export default App;
