function startGame() {
  // starting a new game

  let playerName: string = "Cihan";
  logPlayer(playerName);

  let messagesElement = document.getElementById("messages");
  messagesElement!.innerText =
    "Welcome to MultiMath! Starting a really cool new game...";
}

function logPlayer(name: string) {
  console.log(`New game is starting for the player: ${name}`);
}

document.getElementById("startGame")!.addEventListener("click", startGame);
