let days = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"] 

document.getElementById('allDaysOfWeekTitle').innerHTML="Alle dagen van de week zijn:"
document.getElementById('allDaysOfWeek').innerHTML=days
document.getElementById('workDaysTitle').innerHTML="De werkdagen zijn:"
for (let i = 0; i < days.length; i++) {
    if(i == 5){
        break;
    }
    else{
        document.getElementById('workDays').innerHTML+=days[i]  + ", "
    }
}
document.getElementById('weekendDaysTitle').innerHTML="De weekenddagen zijn:"
for (let i = 0; i < days.length; i++) {
    if (i < 5){

    }
    else{
        document.getElementById('weekendDays').innerHTML+=days[i]  + ", "
    }
}
document.getElementById('allDaysReverseTitle').innerHTML="Alle dagen van de week in omgekeerde volgorde zijn:"
document.getElementById('allDaysReverse').innerHTML+=days.reverse()
document.getElementById('workDaysReverseTitle').innerHTML="De werkdagen in omgekeerde volgorde zijn:"
days.reverse()
for (let i = 4; i < days.length; i--) {
    if(i == -1){
        break;
    }
    else{
        document.getElementById('workDaysReverse').innerHTML+=days[i]+ ", "
    }
}
document.getElementById('weekendDaysReverseTitle').innerHTML="De weekenddagen in omgekeerde volgorde zijn:"
for (let i = 6; i < days.length; i--) {
    if(i == 4){
        break;
    }
    else{
        document.getElementById('weekendDaysReverse').innerHTML+=days[i]+ ", "
    }
}