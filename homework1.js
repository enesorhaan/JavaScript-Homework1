let days = ["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"];

let fullName = prompt("Adinizi giriniz: ")
let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")

if(myName)
    myName.innerHTML = `${fullName}`
else{
    alert("Bir isim giriniz.")
    location.reload();
}

function clockFunctions() {
    let date = new Date()
    let day = days[date.getDay()]

    myClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${day}`
}

setInterval(clockFunctions,1000)