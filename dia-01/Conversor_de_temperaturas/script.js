let tempC, tempF;

function conversor(source, valNum) {
  valNum = parseFloat(valNum);
  let inputFahrenheit = document.getElementById("inputFahrenheit");
  let inputCelsius = document.getElementById("inputCelsius");

  if (source == "inputFahrenheit") {
    inputCelsius.value = (5 * (valNum - 32) / 9).toFixed(2);
  }
  if (source == "inputCelsius") {
    inputFahrenheit.value = (9 * valNum / 5 + 32).toFixed(2);
  }
}