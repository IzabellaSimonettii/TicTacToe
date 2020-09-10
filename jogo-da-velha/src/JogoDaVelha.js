import React, { useState , useEffect} from 'react';
import './JogoDaVelha.css';

function JogoDaVelha() {

  const emptyBoard = Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {

    if (board[index] !== "") {
      alert("Este campo já foi preenchido, escolha outro!")
      return null;
    } else{
        setBoard(board.map((item, itemIdex)=> itemIdex === index ? currentPlayer: item));
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
      
  };

  const findWinner = () => {
    const possibleWaysToWin = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],

    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[4], board[8]],

    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]]
    ];

    checkDraw();

    if (winner === 'E'){
      return null;
    } else {
      possibleWaysToWin.forEach(cells => {
        if(cells.every(cell => cell === "O")){
          setWinner("O");
          console.log('o venceu ',winner);
        }
        if(cells.every(cell => cell === "X")){
          setWinner("X");
          console.log('X venceu ',winner);
        } 
      });
    }
  }

  const checkDraw = () =>{
    if (board.every(item => item !== "")){
      setWinner("D");
    }
  };

  useEffect(()=> {
    findWinner();
    switch (winner) {
      case "O":
        console.log("Empate!");
        break;
      default:
        console.log("O jogador " + winner + " venceu!");
        break;
    }
  });


  const playRandom = () => {
    var place = 0;
   
    do {
      let random_number = Math.random();
       place = Math.floor(random_number * 10)-1;
    } while (board[place] !== "");   
    handleCellClick(place);
  }

  const resetGame = () =>{
      setCurrentPlayer(winner);
      setBoard(emptyBoard);
      setWinner(null);
    }

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>

      <div className="random-cell">
        <button onClick={playRandom} >Jogada aleatoria</button>
      </div>

      <div className={`board ${winner ? "game-over" : ""}`}>
      {board.map((item, index)=> (
        <div 
        key={index} 
        className={`cell ${item}`}
        onClick={()=> handleCellClick(index)}
        > {item} </div>
      ))}
      </div>

      {winner && 
        <footer>
          {winner === "D" ?
            <h2 className="winner-message">
            <span className={winner}>Empate!</span> 
            </h2>
          :
            <h2 className="winner-message">
            <span className={winner}> {winner}</span> venceu!
            </h2>
        }
          <div>
          <button onClick={resetGame}> Jogar novamente!</button>
          </div>
        </footer>
      }
    </main>
  );
}

export default JogoDaVelha;
