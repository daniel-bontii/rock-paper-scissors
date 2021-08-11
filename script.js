const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Error');
  }
};

const getComputerChoice = () =>{
  switch(Math.floor(Math.random() * 3)){
    case 0:
      return 'rock';
      break
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game was a tie';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won';
    }else{
      return 'You won';
    }
  }
  if(userChoice === 'paper'){
    if( computerChoice === 'Scissors'){
      return 'The computer won'
    }else{
      return 'You won';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won';
    }else{
      return 'You won';
    }
  }
  if(userChoice === 'bomb'){
    return 'You won';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}`);
  console.log(`The computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
