let arrayEen = [1,2,3,4,5,6,7,8,9,10], arrayTwee = [2,4,6,8,10,12,14,16,18,20]

document.getElementById('title').innerHTML = "Arrray operatoren"
document.getElementById('plusTitle').innerHTML = "Optellen van de twee arrays zijn:"
for (let i = 0; i < arrayEen.length; i++) {
    let amount = arrayEen[i] + arrayTwee[i]
    document.getElementById('plus').innerHTML += arrayEen[i] + " + " + arrayTwee[i] + " = " + parseInt(amount) + "<br>"
}
document.getElementById('minusTitle').innerHTML = "Aftrekken van de twee arrays zijn:"
for (let i = 0; i < arrayEen.length; i++) {
    let amount = arrayTwee[i] - arrayEen[i]
    document.getElementById('minus').innerHTML += arrayTwee[i] + " - " + arrayEen[i] + " = " + parseInt(amount) + "<br>"
}
document.getElementById('multiplyTitle').innerHTML = "Vermenigvuldigen van de twee arrays zijn:"
for (let i = 0; i < arrayEen.length; i++) {
    let amount = arrayEen[i] * arrayTwee[i]
    document.getElementById('multiply').innerHTML += arrayEen[i] + " * " + arrayTwee[i] + " = " + parseInt(amount) + "<br>"
}
document.getElementById('divideTitle').innerHTML = "Delen van de twee arrays zijn:"
for (let i = 0; i < arrayEen.length; i++) {
    let amount = arrayTwee[i] / arrayEen[i]
    document.getElementById('divide').innerHTML += arrayTwee[i] + " / " + arrayEen[i] + " = " + parseInt(amount) + "<br>"
}
