let playerOne = {
    name: "One",
    score: 0
  }
  
  let playerTwo = {
    name: "Two",
    score: 0
  }
  
  let players = [playerOne, playerTwo];
  let gameTurn = 0;
  let hiddenNumber = 0;
  
  const playerTurnLbl = document.querySelector(".player-turn-lbl");
  const playerGuessField = document.querySelector(".player-guess-field");
  const playerGuessBtn = document.querySelector(".player-guess-btn");
  const playerGuessMsg = document.querySelector(".player-guess-msg");
  const playerOneScorePara = document.querySelector(".player-one-score");
  const playerTwoScorePara = document.querySelector(".player-two-score");
  
  function updateDisplays() {
    let currentPlayer = players[gameTurn];
    playerTurnLbl.innerText = currentPlayer.name;
    playerOneScorePara.innerText = `Player ${players[0].name} score: ${players[0].score}`
    playerTwoScorePara.innerText = `Player ${players[1].name} score: ${players[1].score}`
    playerGuessField.value = "";
  }
  
  function handleGuess() {
    let guessValue = playerGuessField.value;
  
    if (guessValue == hiddenNumber) {
      let currentPlayer = players[gameTurn];
      currentPlayer.score = currentPlayer.score + 1;
  
      playerGuessMsg.innerText = `${guessValue} was correct!` ;
      startGame(); // restarts game
  
    } else if (guessValue > 10 || guessValue < 1) {
      playerGuessMsg.innerText = "Please enter a number between 1 and 10"
    } else if (guessValue > hiddenNumber) {
      playerGuessMsg.innerText = `${guessValue} was too high! `;
    } else if (guessValue < hiddenNumber) {
      playerGuessMsg.innerText = `${guessValue} was too low!` ;
    }
  
    gameTurn = (gameTurn + 1) % 2; // alternera mellan spelare
  
    updateDisplays();
  }
  
  playerGuessBtn.addEventListener("click", handleGuess);
  
  function startGame() {
    hiddenNumber = Math.floor(Math.random() * 10) + 1;
  
    let currentPlayer = players[gameTurn];
    playerTurnLbl.innerText = currentPlayer.name;
  }
  
  startGame();