// Select level

var tentativas = 3;

function chooseLevel() {
  if (document.getElementById("easy").checked) {
    let secretNumber = parseInt(Math.random() * 11);
    setEasyGame(secretNumber);
  } else if (document.getElementById("medium").checked) {
    let secretNumber = parseInt(Math.random() * 101);
    setMediumGame(secretNumber);
  } else if (document.getElementById("hard").checked) {
    let secretNumber = parseInt(Math.random() * 1001);
    setHardGame(secretNumber);
  }
}

// Set page for each level

function setEasyGame(secretNumber) {
  exitInitial();
  document.querySelector(
    ".page-inicial"
  ).innerHTML += `<p class="page-subtitle">Você tem <strong>${tentativas}</strong> chances para advinhar um número entre 0 e 10</p><br>
    <p>Digite um número de 0 a 10</p>
    <input type="number" id="valor" /><br>
    <button type="submit" onclick="chutar(${secretNumber})">Chutar</button>
    <div id="resultado"></div>`;
}

function setMediumGame(secretNumber) {
  tentativas += 1
  exitInitial();
  document.querySelector(
    ".page-inicial"
  ).innerHTML += `<p class="page-subtitle">Você tem <strong>${tentativas}</strong> chances para advinhar um número entre 0 e 100</p><br>
    <p>Digite um número de 0 a 100</p>
    <input type="number" id="valor" /><br>
    <button type="submit" onclick="chutar(${secretNumber})">Chutar</button>
    <h2 class="resultado" id="resultado"></h2>`;
}

function setHardGame(secretNumber) {
  tentativas += 2
  exitInitial();
  document.querySelector(
    ".page-inicial"
  ).innerHTML += `<p class="page-subtitle">Você tem <strong>${tentativas}</strong> chances para advinhar um número entre 0 e 1000</p><br>
    <p>Digite um número de 0 a 1000</p>
    <input type="number" id="valor" /><br>
    <button type="submit" onclick="chutar(${secretNumber})">Chutar</button>
    <h2 class="resultado" id="resultado"></h2>`;
}

function exitInitial() {
  document.querySelector(".page-inicial").innerHTML = "";
}

// Game

function chutar(secretNumber) {
  let valor = Number(document.getElementById("valor").value);
  while (tentativas > 0) {
    if (valor == secretNumber) {
      document.getElementById("resultado").innerHTML = "Parabéns, você acertou!!";
      return;
    } else if (valor > secretNumber) {
      document.getElementById("resultado").innerHTML = `Errou, o número secreto é <strong>menor</strong>!!`;
      tentativas -= 1;
      document.querySelector(".page-subtitle").innerHTML = `Você tem <strong>${tentativas}</strong> chances para advinhar o número secreto`;
      break;
    } else {
      document.getElementById("resultado").innerHTML = `Errou, o número secreto é <strong>maior</strong>!!`;
      tentativas -= 1;
      document.querySelector(".page-subtitle").innerHTML = `Você tem <strong>${tentativas}</strong> chances para advinhar o número secreto`;
      break;
    }
  }
  if (tentativas == 0) {
    document.getElementById("resultado").innerHTML = `Você perdeu, o número secreto era ${secretNumber}!!`;
  }
}
