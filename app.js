//Тоглогчийн ээжийг хадгалах хувьсагч
var activePlayer ;

var isGameOver;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores;


// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалх хувьсагч
var roundScore ;




 var diceDom =document.querySelector(".dice");


 initGame();
function initGame(){
    //Тоглогчийн ээжийг хадгалах хувьсагч
    activePlayer = 0;
    isGameOver = false;
    
    // Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
    scores = [0,0];
    
    
    // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалх хувьсагч
    roundScore = 0;
    
    
    
    
    document.getElementById("score-0").textContent ="0";
    document.getElementById("score-1").textContent ="0";
    document.getElementById("current-0").textContent ="0";
    document.getElementById("current-1").textContent ="0";

    document.getElementById("name-0").textContent = "player  1";
    document.getElementById("name-1").textContent = "player  2";


    diceDom.style.display = "none"
    };



// Шоог шидэх эвент листенер

document.querySelector(".btn-roll").addEventListener("click",
function(){
    if (isGameOver !== true){
        var diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1){
     
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
     
    }
    else{
        switchToNexyPlayer();

    }
    }
});


function switchToNexyPlayer() {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent ="0";

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none"
}
// hold товчны эвент листенер


document.querySelector(".btn-hold").addEventListener("click",function(){
 
   if(isGameOver !== true){
    scores[activePlayer]=scores[activePlayer]  + roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    
    if (scores[activePlayer] >= 20){
        isGameOver = true;
        document.getElementById("name-" + activePlayer).textContent = "WINER";

    }else{
     
    }


    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    switchToNexyPlayer();
   }

    
})


//Шинээх тогоом эхлүүлэх товч


document.querySelector(".btn-new").addEventListener("click",initGame);