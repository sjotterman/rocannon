import React, { useState } from 'react';
import './App.css';
import Selector from './components/Selector';
import Ranker from './components/Ranker';


function App() {
  const [stage, setStage] = useState('entry');
  const [choices, setChoices] = useState([]);


  return (
    <div className="App">
      {stage === 'entry' && (
        <Selector
          choices={choices}
          setChoices={setChoices}
          onFinish={() => {
            setStage('ranker');
          }}
        />
      )}
      {stage === 'ranker' && <Ranker listItems={choices} setChoices={setChoices} />}
    </div>
  );
}

export default App;
