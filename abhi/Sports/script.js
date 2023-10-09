const Questions=[
    {
        question :`Who holds the record for the highest individual score in Test cricket?`,
        answer :[
            {text:"Sachin Tendulkar",correct: false},
            {text:"Brian Lara",correct: true},
            {text:"Don Bradman",correct: false},
            {text:"Rohit Sharma",correct: false}
        ]
    },
    {
        question :`Which country has won the most FIFA World Cup titles?`,
        answer :[
            {text:"Brazil",correct: true},
            {text:"Germany",correct: false},
            {text:"Argentina",correct: false},
            {text:"Italy",correct: false}
        ]
    },
    {
        question :`Who has won the most Grand Slam singles titles in men's tennis?`,
        answer :[
            {text:"Roger Federer",correct: true},
            {text:"Rafael Nadal",correct: false},
            {text:"Novak Djokovic",correct: false},
            {text:"Pete Sampras",correct: false}
        ]
    },
    {
        question :`Which NBA player has the most career points in Basketball?`,
        answer :[
            {text:"Michael Jordan",correct: false},
            {text:"LeBron James",correct: false},
            {text:"Kobe Bryant",correct: false},
            {text:"Kareem Abdul-Jabbar",correct: true}
        ]
    },
    {
        question :`Who holds the men's world record for the 100-meter sprint?`,
        answer :[
            {text:"Usain Bolt",correct: true},
            {text:"Carl Lewis",correct: false},
            {text:"Asafa Powell",correct: false},
            {text:"Tyson Gay",correct: false}
        ]
    },
    {
        question :`Who has the most major championship wins in golf?`,
        answer :[
            {text:"Tiger Woods",correct: false},
            {text:"Jack Nicklaus",correct: true},
            {text:"Arnold Palmer",correct: false},
            {text:"Phil Mickelson",correct: false}
        ]
    },
    {
        question :`Who holds the record for the most World Drivers' Championship titles in Formula 1?`,
        answer :[
            {text:"Lewis Hamilton",correct: false},
            {text:"Michael Schumacher",correct: true},
            {text:"Ayrton Senna",correct: false},
            {text:"Sebastian Vettel",correct: false}
        ]
    },
    {
        question :`Who has scored the most runs in One Day Internationals (ODIs)?`,
        answer :[
            {text:"Sachin Tendulkar",correct: true},
            {text:"Virat Kohli",correct: false},
            {text:"Rohit Sharma",correct: false},
            {text:"Kumar Sangakkara",correct: false}
        ]
    },
    {
        question :`Who is the all-time leading goal scorer in international football?`,
        answer :[
            {text:"Cristiano Ronaldo",correct: true},
            {text:"Lionel Messi",correct: false},
            {text:"Pele",correct: false},
            {text:"Miroslav Klose",correct: false}
        ]
    },
    {
        question :`Who has won the most Grand Slam singles in Men's Tennis?`,
        answer :[
            {text:"Novak Djokovic",correct: true},
            {text:"Roger Federer",correct: false},
            {text:"Rafael Nadal",correct: false},
            {text:"Pete Sampras",correct: false}
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
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="sport.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();