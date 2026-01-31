import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";

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
    return null;
  };

  const handleRestart = () => {
 
  };

  const renderStatus = () => {
 
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
