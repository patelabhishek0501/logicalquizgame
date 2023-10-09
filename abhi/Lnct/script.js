const Questions=[
    {
        question :`Which is the best private college in Bhopal?`,
        answer :[
            {text:"BANSAL",correct: true},
            {text:"TIT",correct: false},
            {text:"Oriental",correct: false},
            {text:"None of the above",correct: false}
        ]
    },
    {
        question :`Which is the best branch in BANSAL?`,
        answer :[
            {text:"CSE",correct: true},
            {text:"AIML",correct: false},
            {text:"IOT",correct: false},
            {text:"AI and DS",correct: false}
        ]
    },
    {
        question :`how many section in cse department in 2nd year ?`,
        answer :[
            {text:"1",correct: true},
            {text:"2",correct: true},
            {text:"3",correct: true},
            {text:"5",correct: true}
        ]
    },
    {
        question :`Highest package of BANSAL?`,
        answer :[
            {text:"1.12CR",correct: false},
            {text:"57 LACS",correct: true},
            {text:"7 CR",correct: false},
            {text:"40 LACS",correct: false}
        ]
    },
    {
        question :`When was BGI Bhopal established ?`,
        answer :[
            {text:"2002",correct: true},
            {text:"2000",correct: false},
            {text:"2005",correct: false},
            {text:"1990",correct: false}
        ]
    },
    {
        question :`How much attendance is required for detaining in midsem?`,
        answer :[
            {text:"70",correct: false},
            {text:"75",correct: true},
            {text:"80",correct: false},
            {text:"69",correct: false}
        ]
    },
    {
        question :`How many students are there in CSE department of ?`,
        answer :[
            {text:"464",correct: false},
            {text:"500",correct: true},
            {text:"490",correct: false},
            {text:"469",correct: false}
        ]
    },
    {
        question :`How many students got placed in Deutsche Bank from BGI?`,
        answer :[
            {text:"26",correct: true},
            {text:"22",correct: false},
            {text:"15",correct: false},
            {text:"28",correct: false}
        ]
    },
    {
        question :`Which celebrity had came in timelaps 2023 Fest of BGI Bhopal?`,
        answer :[
            {text:"Shah Rukh khan",correct: false},
            {text:"Farhan Akhtar",correct: true},
            {text:"Paradox",correct: false},
            {text:"Punnet Superstar",correct: false}
        ]
    },
    {
        question :`What is the price of Cheese Maggie in Hidden Caffe?`,
        answer :[
            {text:"30",correct: false},
            {text:"40",correct: false},
            {text:"50",correct: true},
            {text:"60",correct: false}
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
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="lnct.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();