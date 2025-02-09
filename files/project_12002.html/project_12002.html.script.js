let operators = ['+', '-', '*', '/'];
var last = 0, _answer = 0,scoreWin = 0, scoreLose = 0, firstNum = 0, secondNum = 0;
var _export = '0 + 0', _scoreTotal = ' ';
var selectedOP;
let state = 0; // Değişken (1: Yeşil, 0: Kırmızı)
var firstLoad = false;
var loop = true;

window.onload = function() {
    checkAndReset();
};

function glowEffect() {
    const box = document.getElementById('gameBox');
    if (state === 1) {
        // Yeşil parlama
        box.style.boxShadow = '0 0 20px 10px rgba(0, 255, 0, 0.7)';
    } else {
        // Kırmızı parlama
        box.style.boxShadow = '0 0 20px 10px rgba(255, 0, 0, 0.7)';
    }

    // Parlama söner
    setTimeout(() => {
        box.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
    }, 500);
}

function generateNumbers() {
    firstNum = Math.floor(Math.random() * (25 + 1)) + 1;
    secondNum = Math.floor(Math.random() * (25 + 1)) + 1;
}

function checkAndReset() {
    document.getElementById("scoreText").textContent = "";
    
    if (firstLoad == true) {
        _answer = document.getElementById('answer').value;
        if (_answer == last) {
            scoreWin += 1; 
            state = 1; 
            glowEffect();
        }
        else if(_answer != last){
            scoreLose += 1;
            state = 0;
            glowEffect();
        }

        console.log(`win: ${scoreWin}\nlose: ${scoreLose}\n`);

        _scoreTotal = `<a style='color:lime'>Doğru: ${scoreWin}</a><br><a style='color:red'>Yanlış: ${scoreLose}</a>`;
        document.getElementById("scoreText").innerHTML = _scoreTotal;
    }
    
    selectedOP = operators[Math.floor(Math.random() * operators.length)];

    generateNumbers();

    if(selectedOP == '+'){last = firstNum + secondNum;}
    else if(selectedOP == '-'){last = firstNum - secondNum;}
    else if(selectedOP == '*'){last = firstNum * secondNum;}
    else if(selectedOP == '/'){
        while(loop){
            var value = firstNum % secondNum;
            if(value == 0){
                last = firstNum / secondNum;
                loop = false;
                break;
            }
            else{
                generateNumbers();
            }
        }
    }

    _export = `${firstNum}  ${selectedOP}  ${secondNum}`;
    document.getElementById("askText").innerHTML = _export;

    
    
    firstLoad = true;

    //Check commands
    console.log(`\nfirst: ${firstNum}\noperator:${selectedOP}\nsecond: ${secondNum}\nlast:${last}\nfirstLoad: ${firstLoad}`);
}