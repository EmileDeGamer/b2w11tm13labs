document.getElementById('title').innerHTML = "Pyramide aflopend"

let input = prompt("Voer een getal in", "Getal:")
let array = []

let tempI = input
for (let times = 0; times <= tempI; times++) {
    for (let i = input; i <= input; i--) {
        if (i == -1){
            break;
        }
        array.push(i)
    }
    input--
    array.reverse()
    document.getElementById('text').innerHTML += array + "<br>"
    if (times == 1){
        array.push(array.length)
        document.getElementById('array').innerHTML = "Array: " + array + "<br>"
    }
    array = []
}