const userName = prompt("Adınız nedir?")

document.querySelector('#myName').textContent = userName

const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

function clock(){
    let currentDate = new Date()
    let day = currentDate.getDay()

    let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${days[day]}`

    document.querySelector('#myClock').textContent = currentTime    

    setTimeout("clock()",1000);
}
clock()
