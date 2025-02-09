var counter = 1;
var state = 0; //Küçük = 0, Eşit = 1, Büyük = 2

var randomValue = Math.floor(Math.random() * 100) + 1;
console.log("Random Değeri: " + randomValue);

function checkAnswer() {
    var answer = document.getElementById("answer").value;

    if (answer < randomValue) {
        state = 0;
        counter++; 
        document.getElementById("last").innerHTML = "<a style='color:red; font-size:1.2rem;'>^ Sayı daha büyük ^</a>";
        document.getElementById("last").innerHTML += "<br> Toplam deneme: " + counter;
    }
    else if (answer == randomValue){
        state = 1;
        document.getElementById("last").innerHTML = "<a style='color:lime;'>TEBRİKLER!</a>";
        document.getElementById("last").innerHTML += "<br> Toplam deneme: " + counter;
    }
    else if (answer > randomValue){
        state = 2;
        counter++;
        document.getElementById("last").innerHTML = "<a style='color:red; font-size:1.6rem;'><b>v Sayı daha küçük v</b></a>";
        document.getElementById("last").innerHTML += "<br> Toplam deneme: " + counter;
    }
    console.log("\nCevap: " + answer + "\nRandom Değeri: " +randomValue + "\nState: "+state);
}
