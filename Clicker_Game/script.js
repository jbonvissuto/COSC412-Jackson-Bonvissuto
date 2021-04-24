

let x
//This needs to grab from the database not local storage 
var highscore = localStorage.getItem("highscore");
document.getElementById("highscore").innerHTML = highscore;
// if the key value pair exists, we set x equal to the stored value
// else, set x to 0
if (localStorage.getItem("count")){
    x = parseInt(localStorage.getItem("count"));
} else{
    x = 0;
}

document.getElementById('btn').addEventListener("click", iterate);
document.getElementById("counter").innerHTML = x;
function iterate(){
    x += 1;
    localStorage.setItem("count", x);
    console.log(x);
    document.getElementById("counter").innerHTML = x;
}


document.getElementById('btn2').addEventListener("click", reset);
function reset(){
    x = 0;
    localStorage.setItem("count", x);
    console.log(x);
    document.getElementById("counter").innerHTML = x;
}



document.getElementById('btn3').addEventListener("click", highScore);
function highScore(){
    //const name = prompt('You got a high score! Enter name:');
    //This needs to grab from the database not local storage 
    var highscore = localStorage.getItem("highscore");
    if(highscore !== null){
        if (x > highscore) {
            //This needs to set the value in the database
            localStorage.setItem("highscore", x); 
            
            document.getElementById("highscore").innerHTML = x; 
            saveScore();   
        }
    }
    else{
        //This needs to set the value in the database
        localStorage.setItem("highscore", x);
        
        document.getElementById("highscore").innerHTML = x;  
    }
}

document.getElementById('btn4').addEventListener("click", resetScore);
function resetScore(){
    highscore = 0;
    //This needs to set the value in the database
    localStorage.setItem("highscore", highscore);
    console.log(highscore);
    document.getElementById("highscore").innerHTML = highscore;
}


//store scroe in database
function saveScore() {
    $.post("set_score.php", {score: "highscore",} );
}
//read highscore from database v2
window.addEventListener("load", function(){
    $.post(
        "get_score.php",
        function(response) {
            document.getElementById("db_highscore").innerHTML = response.high_score;
        }, 'json'
    );  
});

/*reads highscore from database 
window.addEventListener("load", function(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "show_score_old.php");
    xhr.onload = function(){
      document.getElementById("demo").innerHTML = this.response;
    };
    xhr.send();
  });
*/