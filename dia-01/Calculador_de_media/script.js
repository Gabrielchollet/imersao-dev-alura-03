const tbodyEL = document.querySelector('tbody')

var grades = []

function exibirNotasNaTela() {
  const testName = String(document.getElementById("testName").value)
  const grade = Number(document.getElementById("grade").value)

  grades.push(grade)

  tbodyEL.innerHTML += `
      <tr>
          <td>${testName}</td>
          <td>${grade}</td>
      </tr>
  `;

  limpaInput()
  media = calcMedia()
  updateStatus(media)
}

function limpaInput() {
  document.getElementById('testName').value = ''
  document.getElementById('grade').value = ''
}

function calcMedia() {
  if (grades.length != 0) {
    let sum = 0
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i]
    }
    //console.log(sum)
    document.getElementById('output').value = Number((sum / grades.length).toFixed(2))
    return Number((sum / grades.length).toFixed(2))
  }
  else {
    document.getElementById('output').value = 0
    return 0
  }

}

function updateStatus(media) {
  if (media < 7) {
    document.getElementById('result').innerHTML = "Reprovado"
  }
  else {
    document.getElementById('result').innerHTML = "Aprovado"
  }
}