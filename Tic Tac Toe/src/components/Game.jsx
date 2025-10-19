// src/components/Game.jsx
import { useState } from 'react';
import Board from './Board';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <Board squares={squares} onPlay={handlePlay} xIsNext={xIsNext} />
      <button className="restart-btn" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}

export default Game;