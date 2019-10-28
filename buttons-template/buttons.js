let button1 = document.getElementById('button1'), button2 = document.getElementById('button2'), button3 = document.getElementById('button3')
let lastClickedButton
let amounts = {
    'clicks1' : 0,
    'clicks2' : 0,
    'clicks3' : 0
}

CheckButton()

function CheckButton(){
    if(lastClickedButton == "button1"){
        button1.style.border = "5px solid red"
        button1.disabled = true
    }
    if (lastClickedButton == "button2"){
        button2.style.border = "5px solid red"
        button2.disabled = true
    }
    if (lastClickedButton == "button3"){
        button3.style.border = "5px solid red"
        button3.disabled = true
    }
    
    if(lastClickedButton != "button1"){
        button1.style.border = "5px solid green"
        button1.disabled = false
    }
    if (lastClickedButton != "button2"){
        button2.style.border = "5px solid green"
        button2.disabled = false
    }
    if (lastClickedButton != "button3"){
        button3.style.border = "5px solid green"
        button3.disabled = false
    }
}

function onbutton1clicked(){
    lastClickedButton = "button1"
    CheckButton()
    amounts['clicks1']++
    var elms = document.querySelectorAll("[id='amount1']");

    for(var i = 0; i < elms.length; i++) 
        elms[i].innerHTML = amounts['clicks1'];
}

function onbutton2clicked(){
    lastClickedButton = "button2"
    CheckButton()
    amounts['clicks2']++
    var elms = document.querySelectorAll("[id='amount2']");

    for(var i = 0; i < elms.length; i++) 
        elms[i].innerHTML = amounts['clicks2'];
}

function onbutton3clicked(){
    lastClickedButton = "button3"
    CheckButton()
    amounts['clicks3']++
    var elms = document.querySelectorAll("[id='amount3']");

    for(var i = 0; i < elms.length; i++) 
        elms[i].innerHTML = amounts['clicks3'];
}