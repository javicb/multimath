function startGAme() {
  // starting new game

  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(100, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
  console.log(`New game starting for player ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    console.log(inputElement.value);
    return undefined;
  }
  else {
    console.log(inputElement.value);
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
  const scoreElement: HTMLElement | null = document.getElementById('postedScore');
  scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGAme);