import React from 'react'
import "./startscreen.css"


function startscreen({startGame})  {
  return (
    <div className='start'>
        <h1>Start Screen</h1>
        <p> Clique no botao abaixo para começar  a jocgar </p>
        <button onClick={startGame}> Começar a jogar</button>
     
    </div>
  )
}

export default startscreen
