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
                <button class="btn btn-lg" type="submit">Lyrics Pre 1990</button>
                <button class="btn btn-lg" type="submit">Lyrics Post 1990</button>       
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
                <button class="btn btn-lg" type="submit">80s</button>
                <button class="btn btn-lg" type="submit">90s</button>
                <button class="btn btn-lg" type="submit">00s</button>       
         </div>`;

}
function runGeneralKnowGame() {
  for (var a=[],i=0;i<15;++i) a[i]=i;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

a = shuffle(a);

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

