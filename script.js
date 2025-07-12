let userScore = 0;
let compScore = 0;

function play(userChoice) {
  const choices = ['snake', 'water', 'gun'];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').innerText = `You chose: ${emoji(userChoice)} ${capitalize(userChoice)}`;
  document.getElementById('comp-choice').innerText = `Computer chose: ${emoji(compChoice)} ${capitalize(compChoice)}`;

  const result = getWinner(userChoice, compChoice);

  if (result === 'win') {
    userScore++;
    document.getElementById('status').innerText = "🎉 You Win!";
  } else if (result === 'lose') {
    compScore++;
    document.getElementById('status').innerText = "😢 You Lose!";
  } else {
    document.getElementById('status').innerText = "😐 It's a Draw!";
  }

  document.getElementById('user-score').innerText = userScore;
  document.getElementById('comp-score').innerText = compScore;
}

function getWinner(user, comp) {
  if (user === comp) return 'draw';
  if (
    (user === 'snake' && comp === 'water') ||
    (user === 'water' && comp === 'gun') ||
    (user === 'gun' && comp === 'snake')
  ) return 'win';
  return 'lose';
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function emoji(choice) {
  if (choice === 'snake') return '🐍';
  if (choice === 'water') return '💧';
  if (choice === 'gun') return '🔫';
}
