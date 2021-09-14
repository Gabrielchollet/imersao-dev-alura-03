/* 
function conversor (valNum)
{
  document.getElementById("outputDolar").innerHTML = valNum / 5.71
} 
*/

function conversor(source, valNum) {
  valNum = parseFloat(valNum);
  var inputReal = document.getElementById("inputReal");
  var inputDolar = document.getElementById("inputDolar");
  var inputLibra = document.getElementById("inputLibra");
  var inputBitcoin = document.getElementById("inputBitcoin");
  if (source == "inputReal") {
    inputDolar.value = (valNum / 5.708).toFixed(2);
    inputLibra.value = (valNum / 7.8927).toFixed(2);
    inputBitcoin.value = (valNum / 327112.35).toFixed(6);
  }
  if (source == "inputDolar") {
    inputReal.value = (valNum * 5.708).toFixed(2);
    inputLibra.value = (valNum * 0.7231).toFixed(2);
    inputBitcoin.value = (valNum / 57300.00).toFixed(6);
  }
  if (source == "inputLibra") {
    inputReal.value = (valNum * 7.8927).toFixed(2);
    inputDolar.value = (valNum / 0.7231).toFixed(2);
    inputBitcoin.value = (valNum / 41431.72).toFixed(6);
  }
  if (source == "inputBitcoin") {
    inputReal.value = (valNum * 327112.35).toFixed(2);
    inputDolar.value = (valNum * 57300.00).toFixed(2);
    inputLibra.value = (valNum * 41431.72).toFixed(2);
  }
}
