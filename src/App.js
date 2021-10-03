import Round from "./components/round";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [playAgain, setPlayAgain] = useState();
  const Game = ({ setPlayAgain }) => {
    return <Round setPlayAgain={setPlayAgain}/>;
  };

  return (
    <div className="App">
        <Game setPlayAgain={setPlayAgain}/>
    </div>
  );
}

export default App;
