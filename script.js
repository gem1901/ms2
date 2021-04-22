document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener('click',function(){})
    }
}
,document.getElementById("lyricsCategories").addEventListener("click", lyricsCategories)
,function lyricsCategories() {
  document.getElementById(game-container).innerHTML=`
  <div id="welcome-message">
            <h2>Choose your category for _Missing Lyrics below to start quiz</h2><br>
            <i class="far fa-lightbulb" id="lightbulb"></i>
        </div>
        <div id="answer-butons" class="btn-grid">
                <h4>The quiz will begin once you select your category, good luck!</h4>
                <button class="btn btn-lg" type="submit">Lyrics Pre 1990</button>
                <button class="btn btn-lg" type="submit">Lyrics Post 1990</button>       
         </div>`

}
,document.getElementById("artistCategories").addEventListener("click", artistCategories)
,function artistCategories() {
  document.getElementById(game-container).innerHTML=`
  <div id="welcome-message">
            <h2>Choose your category for Name The Artist below to start quiz</h2><br>
            <i class="far fa-lightbulb" id="lightbulb"></i>
        </div>
        <div id="answer-butons" class="btn-grid">
                <h4>The quiz will begin once you select your category, good luck!</h4>
                <button class="btn btn-lg" type="submit">80s</button>
                <button class="btn btn-lg" type="submit">90s</button>
                <button class="btn btn-lg" type="submit">00s</button>       
         </div>`

}
,function runGeneralKnowGame() {

}
,function runPre90sGame() {

}
,function runPost90sGame() {

}
,function run80sGame() {

}
,function run90sGame() {

}
,function run00sGame() {

}
,function correctAnswer() {

}
,function wrongAnswer() {

}
,function nextQuestion() {

}
,function result() {

}
,function restartGame() {
  
}










/* 
function displayGeneralKnowledgeQ () {
    
    
    let question = generalKnowledgeQuestions[Math.floor(Math.random()*generalKnowledgeQuestions.length)];
    let score = 0;
    for (let i=0; i<=15;i++) {
      let response = window.prompt(generalKnowledgeQuestions[i].prompt);
      if (response==generalKnowledgeQuestions[i].correctAnswer){
        score++;
        alert('Correct!');
      } else {
        alert('Incorrect answer')
      }
      alert('Well done you scored '+ score +'/15' )

    }
*/




)
