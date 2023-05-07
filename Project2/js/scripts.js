var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

var scoreList = [];
var highScore = 0;

function Score(points) {
    this.points = points;
}

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

document.addEventListener('keydown', function(event) {
    jump();
  });

var checkDead = setInterval(function() {

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>-10 && characterTop>=240){
        block.style.animation = "none";
        alert("Game Over. You jumped "+ Math.floor(counter/100) + " burgers!");
        var score = new Score(Math.floor(counter/100));
        scoreList.push(score);
        printScores();
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter = (counter + 1);
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

function printScores(){

    for (var i = 0; i < scoreList.length; i++){
        if(scoreList[i].points > highScore){
            highScore = scoreList[i].points;
        }

        document.getElementById("scoreList").innerHTML = highScore;
    }
}








