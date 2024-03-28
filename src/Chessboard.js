import React from 'react';
import './Chessboard.css';

const Chessboard = ({ size }) => {
  const renderSquares = () => {
    const squares = [];
    const colors = ['black', 'white'];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const color = colors[(i + j) % 2];
        squares.push(
          <div
            key={`${i}-${j}`}
            className={`square ${color}`}
          ></div>
        );
      }
    }
    return squares;
  };

  return <div className="chessboard">{renderSquares()}</div>;
};

export default Chessboard;
