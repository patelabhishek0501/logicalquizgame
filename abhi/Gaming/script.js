const Questions=[
    {
        question :`Which of the following is a popular gaming console?`,
        answer :[
            {text:"PlayStation",correct: true},
            {text:"Microwave",correct: false},
            {text:"Blender",correct: false},
            {text:"Toaster",correct: false}
        ]
    },
    {
        question :`What is the most popular battle royale game?`,
        answer :[
            {text:"Fortnite",correct: true},
            {text:"Chess",correct: false},
            {text:"Monopoly",correct: false},
            {text:"Scrabble",correct: false}
        ]
    },
    {
        question :`Which of the following is a gaming genre known for its fast-paced action and shooting?`,
        answer :[
            {text:"First-person shooter (FPS)",correct: true},
            {text:"Cooking simulation",correct: false},
            {text:"Puzzle",correct: false},
            {text:"Racing",correct: false}
        ]
    },
    {
        question :`What is the name of the iconic character in the Super Mario Bros. franchise?`,
        answer :[
            {text:"Luigi",correct: false},
            {text:"Yoshi",correct: false},
            {text:"Bowser",correct: false},
            {text:"Mario",correct: true}
        ]
    },
    {
        question :`Which company developed the game "The Legend of Zelda"?`,
        answer :[
            {text:"Nintendo",correct: true},
            {text:"Microsoft",correct: false},
            {text:"Sony",correct: false},
            {text:"Ubisoft",correct: false}
        ]
    },
    {
        question :`What is the term for a player's online persona or character in a game?`,
        answer :[
            {text:"Avatar",correct: true},
            {text:"Emoji",correct: false},
            {text:"Hashtag",correct: false},
            {text:"Selfie",correct: false}
        ]
    },
    {
        question :`Which game features a world where players can build and explore their own virtual creations?`,
        answer :[
            {text:"Minecraft",correct: true},
            {text:"Candy Crush",correct: false},
            {text:"Solitaire",correct: false},
            {text:"Tetris",correct: false}
        ]
    },
    {
        question :`What is the name of the popular game streaming platform?`,
        answer :[
            {text:"Twitch",correct: true},
            {text:"Netflix",correct: false},
            {text:"YouTube",correct: false},
            {text:"Hulu",correct: false}
        ]
    },
    {
        question :`Which game series is known for its open-world exploration and adventure?`,
        answer :[
            {text:"The Elder Scrolls",correct: true},
            {text:"Call of Duty",correct: false},
            {text:"FIFA",correct: false},
            {text:"Grand Theft Auto",correct: false}
        ]
    },
    {
        question :`What is the term for a player's progress and achievements in a game?`,
        answer :[
            {text:"Level",correct: false},
            {text:"Score",correct: false},
            {text:"Rank",correct: false},
            {text:"Experience points",correct: true}
        ]
    }
];
const nums = new Set();
while (nums.size !== Questions.length) {
  nums.add(Math.floor(Math.random() * Questions.length));
}
let rand=Array.from(nums);
function startQuiz(){
let opt_Box=document.querySelector(".btn");
let Heading=document.getElementById("head");
let Ques_Box=document.getElementById("Question");
let Next=document.getElementById("Next");
let Main_Box=document.getElementById("app");
let index=0;
let score=0;
let userAns="";
var count=false;
const collection=opt_Box.children;
opt_Box.addEventListener("click",(dets)=>{
  if(count){
      for(i=0;i<(Questions[rand[index]].answer.length);i++){
           userAns=dets.target.textContent;
          if(userAns===collection[i].textContent){
              collection[i].style.background="black";
              collection[i].style.color="white";
              Next.style.display="block";
              count=false;
          }
      }
      compare();
      index++;
  }

});
function showQuestion(){
  let currIndex=rand[index];
  Ques_Box.innerHTML=`<h3>${Questions[currIndex].question}<h3>`;
  Heading.innerHTML=`Question No.${index+1}`
  let opt="";
  for(let i=0;i<(Questions[currIndex].answer.length);i++){
      opt+=`<button id="bt" >${Questions[currIndex].answer[i].text}</button>`
  }
  opt_Box.innerHTML=opt;
}
function compare(){
  for(let k=0;k<collection.length;k++){
      if(Questions[rand[index]].answer[k].correct){
          if(Questions[rand[index]].answer[k].text===userAns){
              score++;
          }
      }
  }
}
Next.addEventListener("click",function(){   
  if(index<Questions.length){
  Heading.style.display="flex";
  Main_Box.style.display="flex";
  opt_Box.style.display="flex";
  Ques_Box.style.display="flex";
  showQuestion();
  Next.innerHTML="Next";
  Next.style.display="none";
  }
  else{
      Main_Box.style.height="90%";
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="Gaming.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();