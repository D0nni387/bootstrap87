// rps

const buttons = document.getElementsByClassName('game-button');

const hands = [
  { name: 'rock', beats: 'scissors' },
  { name: 'paper', beats: 'rock' },
  { name: 'scissors', beats: 'paper' },
];

let playerScore = 0;
let cpuScore = 0;

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    const playerChoice = event.target.dataset.hand;
    const playerHand = hands.find((hand) => hand.name === playerChoice);
    const cpuHand = cpuGuess();
    playRound(playerHand, cpuHand);
  });
}

function cpuGuess() {
  return hands[Math.floor(Math.random() * 3)];
}

function playRound(playerHand, cpuHand) {
  if (playerHand.name === cpuHand.name) {
    console.log('draw');
  } else if (playerHand.beats === cpuHand.name) {
    playerScore++;
    console.log('you win!', playerScore, cpuScore);
  } else {
    cpuScore++;
    console.log('you lose loser', playerScore, cpuScore);
  }

  if (playerScore === 10 || cpuScore === 10) {
    console.log('end of days!');
  }
}
