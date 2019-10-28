let names = []
Main()
function Main(){
    let question = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)", "Hoeveelheid:")
    if (question >= 3){
        for (let i = 0; i < question; i++) {
            let input =  prompt('Voer naam ' + i + ' in', 'Naam:')
            names.push(input)
            if (i == question - 1){
                for (let i = 0; i < names.length; i++) {
                    document.getElementById('namesTitle').innerHTML = "De ingevoerde namen in de array zijn:"
                    document.getElementById('names').innerHTML+=names[i] + ", <br>"
                    names.reverse()
                    document.getElementById('namesReverseTitle').innerHTML = "De ingevoerde namen in de array in omgekeerde volgorde zijn:"
                    document.getElementById('namesReverse').innerHTML+=names[i] + ", <br>" 
                }
            }
        }
    }
    else{
        Main()
    }
}