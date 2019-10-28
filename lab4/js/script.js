let tafels = [2, 4, 6, 8], hoeveelheid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let tafel = 0; tafel < tafels.length; tafel++) {
    document.getElementById("tableTitle" + tafel).innerHTML = "Tafel van " + tafels[tafel] + ":"
    for (let i = 0; i < hoeveelheid.length; i++) {
        let amount = tafels[tafel] * hoeveelheid[i]
        document.getElementById("table" + tafel).innerHTML += tafels[tafel] + " * " + hoeveelheid[i] + " = " + parseInt(amount) + "<br>"
    }
}