document.addEventListener("DOMContentLoaded", function () {
   
} )
document.getElementById("lyricsCategories").addEventListener("click", lyricsCategories());
function lyricsCategories() {
  document.getElementById("game-container").innerHTML=`
  <div id="welcome-message">
            <h1>_Missing Lyrics:</h1><br>
            <i class="far fa-lightbulb" id="lightbulb"></i>
            <h3>Choose your category below to start quiz:</h3><br>
            
        </div>
        <div id="answer-butons" class="btn-grid">
                <h4>The quiz will begin once you select your category, good luck!</h4>
                <button class="btn btn-lg" id="pre90s">LYRICS PRE 1990</button>
                <button class="btn btn-lg" id="post90s">LYRICS POST 1990</button>       
         </div>`;

}

document.getElementById("artistCategories").addEventListener("click", artistCategories());
function artistCategories() {
  document.getElementById("game-container").innerHTML=`
  <div id="welcome-message">
           <h1>Name The Artist:</h1><br>
           <i class="far fa-lightbulb" id="lightbulb"></i>
           <h3>Choose your category below to start quiz:</h3><br>
  </div>
  <div id="answer-butons" class="btn-grid">
                <h4>The quiz will begin once you select your category, good luck!</h4>
                <button class="btn btn-lg" id="80s">80s</button>
                <button class="btn btn-lg" id="90s">90s</button>
                <button class="btn btn-lg" id="00s">00s</button>       
         </div>`;
}
//to create an array of 15 unique nums to pull questions from array of 50 questions
let uniques = chance.unique(chance.natural, 15, {min: 0, max: 49});


document.getElementById("pre90s").addEventListener("click", runPre90sGame());
function runPre90sGame() {
let q = uniques;
let currentQuestion = {lyricsPreQuestions}
for(let q=[],i=0;i<15;++i) q[i]=i;

 document.getElementById("game-container").innerHTML=`<div id="welcome-message">
 <i class="far fa-lightbulb" id="lightbulb"></i>
 <h3 id="question">Question</h3><br>
</div>
<div id="answer-choices">
  <form>
    <input type="radio" id="optA" name="choices">A</input>
    <input type="radio" id="optB" name="choices">B</input>
    <input type="radio" id="optC" name="choices">C</input>

    <div id="answer-butons" class="btn-grid">
                <h2>Please select your answer above and click next to continue:</h2>
                <button class="btn btn-lg" id="next">NEXT</button>
    </div>
  </form> 
</div>
  `;
}

document.getElementById("post90s").addEventListener("click", runPost90sGame());
function runPost90sGame() {
 document.getElementById("game-container").innerHTML='';
}

document.getElementById("80s").addEventListener("click", run80sGame());
function run80sGame() {
 document.getElementById("game-container").innerHTML='';
}

document.getElementById("90s").addEventListener("click", run90sGame());
function run90sGame() {
 document.getElementById("game-container").innerHTML='';
}

document.getElementById("00s").addEventListener("click", run00sGame());
function run00sGame() {
document.getElementById("game-container").innerHTML='';
}


function correctAnswer() {

}
function wrongAnswer() {

}
function nextQuestion() {

}
function result() {

}
function restartGame() {
  
}

