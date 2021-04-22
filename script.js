document.addEventListener("DOMContentLoaded", function () {
   
} )
document.getElementById("lyricsCategories").addEventListener("click", lyricsCategories());
function lyricsCategories() {
  document.getElementById("game-container").innerHTML=`
  <div id="welcome-message">
            <h2>Choose your category for _Missing Lyrics below to start quiz</h2><br>
            <i class="far fa-lightbulb" id="lightbulb"></i>
        </div>
        <div id="answer-butons" class="btn-grid">
                <h4>The quiz will begin once you select your category, good luck!</h4>
                <button class="btn btn-lg" type="submit">Lyrics Pre 1990</button>
                <button class="btn btn-lg" type="submit">Lyrics Post 1990</button>       
         </div>`;

}
document.getElementById("artistCategories").addEventListener("click", artistCategories());
function artistCategories() {
  document.getElementById("game-container").innerHTML=`
  <div id="welcome-message">
            <h2>Choose your category for Name The Artist below to start quiz</h2><br>
            <i class="far fa-lightbulb" id="lightbulb"></i>
        </div>
        <div id="answer-butons" class="btn-grid">
                <h4>The quiz will begin once you select your category, good luck!</h4>
                <button class="btn btn-lg" type="submit">80s</button>
                <button class="btn btn-lg" type="submit">90s</button>
                <button class="btn btn-lg" type="submit">00s</button>       
         </div>`;

}
function runGeneralKnowGame() {

  document.getElementById("game-container").innerHTML='';

}
function runPre90sGame() {
 document.getElementById("game-container").innerHTML='';
}
function runPost90sGame() {
 document.getElementById("game-container").innerHTML='';
}
function run80sGame() {
 document.getElementById("game-container").innerHTML='';
}
function run90sGame() {
 document.getElementById("game-container").innerHTML='';
}
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

