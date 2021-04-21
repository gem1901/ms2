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
      {   question: "Name the artist who sang 'Hello'?",
            answers: {
              a: "Whitney Houston",
              b: "Stevie Wonder",
              c: "Lionel Richie"
            },
            correctAnswer: "c"
        },
        {   question: "Name the artist who sang 'Everybody wants to rule the world'?",
            answers: {
              a: "Tears for Fears",
              b: "Bob Dylan",
              c: "Europe"
            },
            correctAnswer: "a"
        },
        {   question: "Name the artist who sang 'You can call me Al'?",
            answers: {
              a: "The Jacksons",
              b: "Paul Simon",
              c: "The Beachboys"
            },
            correctAnswer: "b"
        },
        {   question: "Name the artist who sang 'Wake me up before you Go-Go'?",
            answers: {
              a: "KC & The Sunshine band",
              b: "Boy meets Girl",
              c: "Wham!"
            },
            correctAnswer: "c"
        },
        {   question: "Name the artist who sang 'You're the Voice'?",
            answers: {
              a: "Mr. Mister",
              b: "John Farnham",
              c: "Bruce Springsteen"
            },
            correctAnswer: "b"
        },
        {   question: "Name the artist who sang '9 to 5'?",
            answers: {
              a: "Janet Jackson",
              b: "Dolly Parton",
              c: "Nena"
            },
            correctAnswer: "b"
        },
        {   question: "Name the artist who sang 'The Power of Love'??",
            answers: {
              a: "Earth, wind & fire",
              b: "Blondie",
              c: "Jennifer Rush"
            },
            correctAnswer: "c"
        },
        {   question: "Name the artist who sang 'Loco in Acapulco'?",
            answers: {
              a: "Four Tops",
              b: "Wham!",
              c: "Billy Joel"
            },
            correctAnswer: "a"
        },
        {   question: "Name the artist who sang 'Lovely Day?",
            answers: {
              a: "Luther Vandross",
              b: "Bill Withers",
              c: "Elton John"
            },
            correctAnswer: "b"
        },
        {   question: "Name the artist who sang 'Sexual Healing'?",
            answers: {
              a: "George Michael",
              b: "Hot Chocolate",
              c: "Marvin Gaye"
            },
            correctAnswer: "c"
        },
        {   question: "Name the artist who sang 'Give It up'?",
            answers: {
              a: "KC & The Sunshine Band",
              b: "Lionel Richie",
              c: "The Bangles"
            },
            correctAnswer: "a"
        },
        {   question: "Name the artist who sang 'Poison'?",
            answers: {
              a: "Dead or Alive",
              b: "Run D.M.C",
              c: "Alice Cooper"
            },
            correctAnswer: "c"
        },
        {   question: "Name the artist who sang 'Footloose'?",
            answers: {
              a: "Kenny Loggins",
              b: "Paul Young",
              c: "Pretenders"
            },
            correctAnswer: "a"
        },
        {   question: "Name the artist who sang 'All Out of Love'?",
            answers: {
              a: "Starship",
              b: "Air Supply",
              c: "Tears for Fears"
            },
            correctAnswer: "b"
        },
        {   question: "Name the artist who sang 'Come On Eileen'?",
            answers: {
              a: "New Order",
              b: "A-Ha",
              c: "Dexys Midnight Runners"
            },
            correctAnswer: "c"
        },
        {   question: "Name the artist who sang 'Relax'?",
            answers: {
              a: "Vanilla Ice",
              b: "Frankie Goes To Hollywood",
              c: "George Michael"
            },
            correctAnswer: "b"
        },
        {   question: "Name the artist who sang 'Gold'?",
            answers: {
              a: "Spandau Ballet",
              b: "Bananarama",
              c: "The Spinners"
            },
            correctAnswer: "a"
        },
        {   question: "Name the artist who sang 'Cruel Summer'?",
            answers: {
              a: "Sister Sledge",
              b: "Madonna",
              c: "Bananarama"
            },
            correctAnswer: "c"
        },
        {   question: "Name the artist who sang 'Love Will Tear Us Apart'?",
            answers: {
              a: "Joy Division",
              b: "The Stranglers",
              c: "Foreigner"
            },
            correctAnswer: "a"
        },
        {   question: "Name the artist who sang 'Frankie'?",
            answers: {
              a: "Blondie",
              b: "Sister Sledge",
              c: "Prince"
            },
            correctAnswer: "b"
          },
          {   question: "Name the artist who sang 'Things Can Only Get Better'?",
              answers: {
                a: "Soft Cell",
                b: "Phil Collins",
                c: "D:Ream"
              },
              correctAnswer: "c"
          },
          {   question: "Name the artist who sang 'Dancing On The Ceiling'?",
              answers: {
                a: "Lionel Richie",
                b: "Prince",
                c: "George Benson"
              },
              correctAnswer: "a"
          },
          {   question: "Name the artist who sang 'Sussudio'?",
              answers: {
                a: "Neil Diamond",
                b: "Paul Young",
                c: "Phil Collins"
              },
              correctAnswer: "c"
          },
          {   question: "Name the artist who sang 'Right Here Waiting'?",
              answers: {
                a: "Tom Jones",
                b: "Richard Marx",
                c: "Bryan Adams"
              },
              correctAnswer: "b"
          },
        },
        {   question: "Name the artist who sang 'Blue Monday'88'?",
            answers: {
              a: "New Order",
              b: "Joy Division",
              c: "The Stranglers"
            },
            correctAnswer: "a"
        },
        {   question: "Name the artist who sang 'We Built This City'?",
            answers: {
              a: "Bruce Springsteen",
              b: "The Beatles",
              c: "Starship"
            },
            correctAnswer: "c"
        },
        {   question: "Name the artist who sang 'Girls Just Want To have Fun'?",
            answers: {
              a: "Cyndi Lauper",
              b: "Mariah Carey",
              c: "Debbie Harris"
            },
            correctAnswer: "a"
        },
        {   question: "Name the artist who sang 'You Got It'?",
            answers: {
              a: "Bill Withers",
              b: "Roy Orbison",
              c: "Kenny Loggins"
            },
            correctAnswer: "b"
        },
      },
      {   question: "Name the artist who sang '99 Red Balloons'?",
          answers: {
            a: "Janet Jackson",
            b: "Four Tops",
            c: "Nena"
          },
          correctAnswer: "c"
      },
      {   question: "Name the artist who sang 'The Lion Sleeps Tonight'?",
          answers: {
            a: "Tight Fit",
            b: "Elton John",
            c: "Michael Bolton"
          },
          correctAnswer: "a"
      },
      {   question: "Name the artist who sang 'Perfect'?",
          answers: {
            a: "Cher",
            b: "Fairground Attraction",
            c: "The Weather Girls"
          },
          correctAnswer: "b"
      },
      {   question: "Name the artist who sang 'I'm So Excited'?",
          answers: {
            a: "The Pointer Sisters",
            b: "Sister Sledge",
            c: "Celine Dion"
          },
          correctAnswer: "a"
      },
    },
    {   question: "Name the artist who sang 'Africa'?",
        answers: {
          a: "Journey",
          b: "A-Ha",
          c: "Toto"
        },
        correctAnswer: "c"
    },
    {   question: "Name the artist who sang 'Total Eclipse Of The Heart'?",
        answers: {
          a: "Celine Dion",
          b: "Bonnie Tyler",
          c: "Dolly Parton"
        },
        correctAnswer: "b"
    },
    {   question: "Name the artist who sang 'Dr.Beat'?",
        answers: {
          a: "Miami Sound Machine",
          b: "Mr.Mister",
          c: "New Kids On the Block"
        },
        correctAnswer: "a"
    },
    {   question: "Name the artist who sang 'Can't Fight This Feeling'?",
        answers: {
          a: "Survivor",
          b: "Europe",
          c: "REO Speedwagon"
        },
        correctAnswer: "c"
    },
  },
  {   question: "Name the artist who sang 'The Final Countdown'?",
      answers: {
        a: "Europe",
        b: "Four Tops",
        c: "Alice Cooper"
      },
      correctAnswer: "a"
  },
  {   question: "Name the artist who sang 'Let's Groove'?",
      answers: {
        a: "Air Supply",
        b: "The Jacksons",
        c: "Earth, Wind & Fire"
      },
      correctAnswer: "c"
  },
  {   question: "Name the artist who sang 'Easy Lover'?",
      answers: {
        a: "Paul Young",
        b: "Phil Collins",
        c: "Sting"
      },
      correctAnswer: "b"
  },
  {   question: "Name the artist who sang 'Celebration'?",
      answers: {
        a: "Kool & the Gang",
        b: "Elton John",
        c: "KC & The Sunshine Band"
      },
      correctAnswer: "a"
  },
},
{   question: "Name the artist who sang 'Upside Down'?",
    answers: {
      a: "Cyndi Lauper",
      b: "Diane Ross",
      c: "Whitney Houston"
    },
    correctAnswer: "b"
},
{   question: "Name the artist who sang 'Addicted To Love'?",
    answers: {
      a: "Joe Cocker",
      b: "Robert Palmer",
      c: "Prince"
    },
    correctAnswer: "b"
},
{   question: "Name the artist who sang 'The Shoop Shoop Song'?",
    answers: {
      a: "Berlin",
      b: "The Bangles",
      c: "Cher"
    },
    correctAnswer: "c"
},
{   question: "Name the artist who sang 'Working My Way Back To You'?",
    answers: {
      a: "The Spinners",
      b: "Spandau Ballet",
      c: "Tina Turner"
    },
    correctAnswer: "a"
},
},
{   question: "Name the artist who sang 'Respectable'?",
    answers: {
      a: "Climie Fisher",
      b: "Mel & Kim",
      c: "Kylie Minogue"
    },
    correctAnswer: "b"
},
{   question: "Name the artist who sang 'Glory Of Love'?",
    answers: {
      a: "George Benson",
      b: "Randy Crawford",
      c: "Peter Cetera"
    },
    correctAnswer: "c"
},
{   question: "Name the artist who sang 'Right Here Waiting'?",
    answers: {
      a: "Richard Marx",
      b: "Bryan Adams",
      c: "Billy Ocean"
    },
    correctAnswer: "a"
},
{   question: "Name the artist who sang 'Faith'?",
    answers: {
      a: "Robert Palmer",
      b: "Phil Collins",
      c: "George Michael"
    },
    correctAnswer: "c"
},
{   question: "Name the artist who sang 'All Night Long'?",
    answers: {
      a: "Lionel Richie",
      b: "Phil Collins",
      c: "Steve Winwood"
    },
    correctAnswer: "a"
},{   question: "Name the artist who sang 'You Spin Me Round(Like A Record)'?",
answers: {
  a: "Alice Cooper",
  b: "Dead or Alive",
  c: "Tight Fit"
},
correctAnswer: "b"
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
