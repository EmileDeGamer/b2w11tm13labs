let button1 = document.getElementById('button1'), button2 = document.getElementById('button2'), button3 = document.getElementById('button3')

let amounts = {
    'clicks1' : 0,
    'clicks2' : 0,
    'clicks3' : 0
}

function onbutton1clicked(){
    amounts['clicks1']++
}

function onbutton2clicked(){
    amounts['clicks2']++
}

function onbutton3clicked(){
    amounts['clicks3']++
}