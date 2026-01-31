import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";

const WINNING_COMBINATIONS = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // columns
  [0,4,8],[2,4,6]          // diagonals
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerLine, setWinnerLine] = useState([]);

  const handleClick = (index) => {
    if (board[index] || winnerLine.length > 0) return;

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setWinnerLine(winner.line);
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const calculateWinner = (squares) => {
    for (let combo of WINNING_COMBINATIONS) {
      const [a,b,c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { player: squares[a], line: combo };
      }
    }
    return null;
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinnerLine([]);
  };

  const renderStatus = () => {
     if (winnerLine.length > 0) {
      const winnerPlayer = board[winnerLine[0]];
      return `Winner: ${winnerPlayer}`;
    } else if (board.every(Boolean)) {
      return "Draw!";
    } else {
      return `Next turn: ${xIsNext ? "X" : "O"}`;
    }
  };
  return (
    <div className="game">
      <h1>Assignment 3 Web</h1>
      <div className="status">{renderStatus()}</div>
      <Board board={board} winnerLine={winnerLine} onCellClick={handleClick} />
      <button className="restart" onClick={handleRestart}>Restart / New Game</button>
    </div>
  );
}

export default App;
