
import './App.css';
import { useCallback, useEffect, useState } from "react";
import { wordlist } from "./data/words.js";
import Startscreen  from"./components/startscreen.js"
import GameOver from "./components/Gemeover/gameOver.js"
import Game from "./components/Game/game.js"

const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"}
  
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordlist) ;
 
  const startGame = ( )=>{
    setGameStage(stages[1].name);
  }

  return (
    <div className="App">
      {gameStage=== "start" && <Startscreen startGame={startGame} />}
      {gameStage=== "game" && <Game/>}
      {gameStage=== "end" && <GameOver/>}

    </div>
  );
}

export default App;
