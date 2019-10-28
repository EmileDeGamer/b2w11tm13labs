document.getElementById('title').innerHTML = "Pyramide oplopend"

let input = prompt("Voer een getal in", "Getal:")
let array = []

for (let i = 0; i <= input; i++) {
    if (i == input){
        document.getElementById('array').innerHTML = "Array: " + array + "<br>"
    }
    array.push(i)
    document.getElementById('text').innerHTML += array + "<br>"
}