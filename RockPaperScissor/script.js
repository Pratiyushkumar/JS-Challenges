const player = document.querySelector('#you');
const computerSign = document.querySelector('#computer-sign');
const result = document.querySelector('#result');
const computer = document.querySelector('#computer');

const choices = ['rock', 'paper', 'scissors'];

player.addEventListener('click', (e) => {
  const userChoice = e.target.id;
  const randomNumber = randomNumberGenerator();
  const computerChoice = choices[randomNumber];
  const choiceResult = checkTheChoice(userChoice, computerChoice);
  computerSign.setAttribute('src', `./images/${computerChoice}.png`);
  computer.style.visibility = 'visible';
  result.textContent = choiceResult;
});

function randomNumberGenerator() {
  return Math.floor(Math.random() * 3);
}

function checkTheChoice(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a Draw";
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You win!';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'You losse!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You win!';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'You losse!';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'You losse!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win!';
  }
}
