/**
 * const used for the DOM
 */
// const buttons = document.getElementsByTagName("button");

const buttons = document.getElementsByClassName("control");

const hands = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "paper",
    beat: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

/**
 * Adding event listeners to all the buttons
 */
for (let button of buttons) {
  button.addEventListener("click", function () {
    const userChoice = button.dataset.type;
    const cpuMove = compMove();

    console.log(cpuMove);
  });
}

/**
 * Changes the comp move based on a random number and adds the corresponding class
 */
function compMove() {
  let cMoveRandom = Math.floor(Math.random() * 3);
  return hands[cMoveRandom].name;
}
