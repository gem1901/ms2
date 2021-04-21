document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
},

function runGame () {


},
function checkAnswer () {

},
function displayCorrect () {

},
function answer () {

},
function updateScore () {

},
function timer () {

},
function displayGeneralKnowledgeQ () {
    let generalKnowledgeQuestions = [
        {   question: "Dummy Q1?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q2?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q3?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q4?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q5?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q6?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q7?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q8?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q9?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q10?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q11?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q12?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q13?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q14?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q15?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q16?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q17?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q18?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q19?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q20?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q21?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy 22?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        
    ];
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



},
function displayLyricsPreQ () {
    let lyricsPreQuestions =[
      {   question: "Dummy Q1?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q2?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q3?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q4?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q5?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q6?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q7?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q8?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q9?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q10?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q11?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q12?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q13?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q14?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q15?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q16?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q17?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q18?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q19?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q20?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
         ] ;
    let question = lyricsPreQuestions[Math.floor(Math.random()lyricsPreQuestions.length)];

},
function displayLyricsPostQ () {
    let lyricsPostQuestions =[
      {   question: "Dummy Q1?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q2?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q3?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q4?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q5?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q6?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q7?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q8?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q9?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q10?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q11?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q12?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q13?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q14?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q15?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q16?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q17?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q18?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q19?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q20?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
    ] ;

},
function displayArtist80sQ () {
    let artist80sQuestions = [
      {   question: "Dummy Q1?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q2?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q3?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q4?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q5?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q6?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q7?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q8?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q9?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q10?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q11?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q12?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q13?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q14?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q15?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q16?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q17?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q18?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q19?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q20?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
        
    ];

},
function displayArtist90sQ () {
    let artist90sQuestions = [
      {   question: "Dummy Q1?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q2?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q3?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q4?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q5?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q6?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q7?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q8?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q9?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q10?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q11?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q12?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q13?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q14?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q15?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q16?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q17?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q18?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q19?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q20?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
        
    ];

},
function displayArtistMoviesQ () {
    let artistMoviesQuestions = [
      {   question: "Dummy Q1?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q2?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q3?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q4?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q5?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q6?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q7?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q8?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q9?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q10?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q11?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q12?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q13?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q14?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q15?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q16?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q17?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q18?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q19?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
            correctAnswer: "c"
        },
        {   question: "Dummy Q20?",
            answers: {
              a: "yes",
              b: "no",
              c: "maybe"
            },
    ];

},





)
