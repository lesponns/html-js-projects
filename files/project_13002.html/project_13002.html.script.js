var inpAlt = 0;
var inpUst = 100;
var counter = 1;
var started = 0;
var hedefsayi;

window.onload = function() {
    document.getElementById("lastOut").innerHTML = '"Başla Butonu ile oyunu başlatın."'
}

function start() {
    hedefsayi = Math.floor(Math.random() * (inpUst - inpAlt + 1)) + inpAlt;
    document.getElementById("lastOut").innerHTML = "Tahminim: " + hedefsayi;
    started = 1;
    counter = 1;
}
function up() {
    if(started == 1)
    {
        counter++;
        inpAlt = hedefsayi;
        start();
    }
}

function down() {
    if(started == 1)
    {
        counter++;
        inpUst = hedefsayi;
        start();
    }
}

function finish() {
    document.getElementById("lastOut").innerHTML = "<a style='color:lime;'>TEBRİKLER!</a><br>Tahmin Sayısı: "+counter+"<br>Sayı: "+hedefsayi;
    counter = 1;
    inpAlt = 0;
    inpUst = 100;
    started = 0;

}