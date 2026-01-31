import React from "react";
import Cell from "./Cell";
import "./Board.css";

function Board({ board, winnerLine, onCellClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => (
        <Cell
          key={idx}
          value={value}
          onClick={() => onCellClick(idx)}
          highlight={winnerLine.includes(idx)}
        />
      ))}
    </div>
  );
}

export default Board;
