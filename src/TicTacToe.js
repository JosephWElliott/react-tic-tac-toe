import React, { useState } from 'react';
import './static/style/TicTacToe.css';


function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState('Next player: X');

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (newSquares.every((square) => square)) {
      setStatus('Tie');
    } else {
      setStatus(`Next player: ${isXNext ? 'O' : 'X'}`);
    }
  };

  const calculateWinner = (squares) => {
    for (let [a, b, c] of winningCombinations) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setStatus('Next player: X');
  };

  return (
    <div className="tic-tac-toe">
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </div>
        ))}
      </div>
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TicTacToe;



