import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import { Square } from "./components/Square.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { saveGameStorage, resetGameStorage } from "./logic/storage/index.js";
function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem("board");
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    return turnFromLocalStorage ?? TURNS.X;
    // El doble signo de pregunta en la ternaria verifica si la primera condicion es null o undifine
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };
  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Guardar partida en Local Storage
    saveGameStorage({ board: newBoard, turn: newTurn });
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };
  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Empezar de nuevo</button>
        <section className="game">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        <section className="turn">
          <Square isSelected={turn == TURNS.X}> {TURNS.X} </Square>
          <Square isSelected={turn == TURNS.O}> {TURNS.O} </Square>
        </section>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
