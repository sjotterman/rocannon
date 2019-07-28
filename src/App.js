import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Selector from './components/Selector';
import Ranker from './components/Ranker';

function App() {
  const [stage, setStage] = useState('entry');

  return (
    <div className="App">
      {stage === 'entry' && (
        <Selector
          onFinish={() => {
            setStage('ranker');
          }}
        />
      )}
      {stage === 'ranker' && <Ranker />}
    </div>
  );
}

export default App;
