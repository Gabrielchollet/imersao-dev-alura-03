// Select level

var tentativas = 3;

function chooseLevel() {
  if (document.getElementById("easy").checked) {
    let secretNumber = randomInt(10);
    setEasyGame(secretNumber);
  } else if (document.getElementById("medium").checked) {
    let secretNumber = randomInt(100);
    setMediumGame(secretNumber);
  } else if (document.getElementById("hard").checked) {
    let secretNumber = randomInt(1000);
    setHardGame(secretNumber);
  }
}

// Set page for each level

function setEasyGame(secretNumber) {
  exitInitial();
  document.querySelector(".page-inicial").innerHTML +=
    `<p class="page-subtitle">Você tem <strong>${tentativas}</strong> chances para advinhar um número entre 0 e 10</p><br>
    <p>Digite um número de 0 a 10</p>
    <input type="number" id="valor" /><br>
    <button type="submit" onclick="chutar(${secretNumber})">Chutar</button>
    <div id="resultado"></div>`;
}

function setMediumGame(secretNumber) {
  tentativas += 1
  exitInitial();
  document.querySelector(".page-inicial").innerHTML += `<p class="page-subtitle">Você tem <strong>${tentativas}</strong> chances para advinhar um número entre 0 e 100</p><br>
    <p>Digite um número de 0 a 100</p>
    <input type="number" id="valor" /><br>
    <button type="submit" onclick="chutar(${secretNumber})">Chutar</button>
    <h2 class="resultado" id="resultado"></h2>`;
}

function setHardGame(secretNumber) {
  tentativas += 2
  exitInitial();
  document.querySelector(".page-inicial").innerHTML += `<p class="page-subtitle">Você tem <strong>${tentativas}</strong> chances para advinhar um número entre 0 e 1000</p><br>
    <p>Digite um número de 0 a 1000</p>
    <input type="number" id="valor" /><br>
    <button type="submit" onclick="chutar(${secretNumber})">Chutar</button>
    <h2 class="resultado" id="resultado"></h2>`;
}



// Game logic

function reset() {
  tentativas = 3;
  exitInitial();
  document.querySelector(".page-inicial").innerHTML +=
    `<div class="forms">
    <p>Escolha a dificuldade da partida!</p>
    <input type="radio" id="easy" name="level" value="01" checked>
    <label for="easy">Fácil</label><br>
    <input type="radio" id="medium" name="level" value="02">
    <label for="medium">Médio</label><br>
    <input type="radio" id="hard" name="level" value="03">
    <label for="hard">Difícil</label><br><br>
    <button onclick="chooseLevel()">START</button>`;
}

function chutar(secretNumber) {
  let valor = Number(document.getElementById("valor").value);
  while (tentativas > 0) {
    if (valor == secretNumber) {
      document.querySelector(".page-inicial").innerHTML = `<div id="resultado">${userResponses("equal")}</div><br><button class="resetButton" onclick="reset()">Recomeçar</button>`;
      return;
    } else if (valor > secretNumber) {
      document.getElementById("resultado").innerHTML = userResponses("smaller");
      tentativas -= 1;
      document.querySelector(".page-subtitle").innerHTML = userResponses("lives left", tentativas);
      break;
    } else {
      document.getElementById("resultado").innerHTML = userResponses("bigger");
      tentativas -= 1;
      document.querySelector(".page-subtitle").innerHTML = userResponses("lives left", tentativas);
      break;
    }
  }
  if (tentativas == 0) {
    document.querySelector(".page-inicial").innerHTML = `<div id="resultado">${userResponses("lost", secretNumber)}</div><br><button class="resetButton" onclick="reset()">Recomeçar</button>`;
  }
}

// Tools of game engine

function randomInt(maxNumber) {
  return Math.floor(Math.random() * maxNumber) + 1;
}

function exitInitial() {
  document.querySelector(".page-inicial").innerHTML = "";
}

function userResponses(situation, number) {
  switch (situation) {
    case "equal":
      response = "Parabéns, você acertou!!";
      break;
    case "smaller":
      response = `Errou, o número secreto é <strong>menor</strong> !!`;
      break;
    case "bigger":
      response = `Errou, o número secreto é <strong>maior</strong> !!`;
      break;
    case "lost":
      response = `Você perdeu, o número secreto era ${number} !!`;
      break;
    case "lives left":
      response = `Você tem <strong>${number}</strong> chances para advinhar o número secreto`;
      break;
  }
  return response;
}