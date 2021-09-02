function startGame() {
  // starting a new game

  let playerName: string | undefined = getInputValue("playername");
  logPlayer(playerName);
  postScore(100, playerName);
  postScore(-5, playerName);
}

function logPlayer(name: string = "MultiMath Player"): void {
  logMessage(`New game is starting for the player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
  const inputElement = <HTMLInputElement>document.getElementById(elementId);
  return inputElement.value === "" ? undefined : inputElement.value;
}

function postScore(
  score: number,
  playerName: string = "MultiMath Player"
): void {
  let logger: (value: string) => void = score < 100 ? logError : logMessage;
  let scoreElement = document.getElementById("postedScore");
  scoreElement!.innerText = `${score} - ${playerName}`;
  logger(`Score:${score}`);
}

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.error(err);
}

document.getElementById("startGame")!.addEventListener("click", startGame);
