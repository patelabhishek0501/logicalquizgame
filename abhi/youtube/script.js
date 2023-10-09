const Questions=[
    {
        question :`What is the average of first five multiples of 12?`,
        answer :[
            {text:"38",correct: false},
            {text:"40",correct: false},
            {text:"36",correct: true},
            {text:"42",correct: false}
        ]
    },
    {
        question :`Today is Thursday. After 132 days,it will be `,
        answer :[
            {text:"Monday",correct: false},
            {text:"Wednesday",correct: true},
            {text:"Sunday",correct: false},
            {text:"Thursday",correct: false}
        ]
    },
    {
        question :`Find the HCF,if the number are in the ratio of 4:5:6 nad their LCM is 2400 ?`,
        answer :[
            {text:"50",correct: false},
            {text:"35",correct: false},
            {text:"20",correct: true},
            {text:"40",correct: false}
        ]
    },
    {
        question :`127,131,139,?,151,157,163,167`,
        answer :[
            {text:"141",correct: true},
            {text:"149",correct: false},
            {text:"142",correct: false},
            {text:"143",correct: false}
        ]
    },
    {
        question :`BHL,DJN,FLP,?`,
        answer :[
            {text:"HOS",correct: false},
            {text:"HNR",correct: true},
            {text:"IOS",correct: false},
            {text:"INR",correct: false}
        ]
    },
    {
        question :`What will be the day of the week 15th August,2010?`,
        answer :[
            {text:"Friday",correct: false},
            {text:"Monday",correct: false},
            {text:"Sunday",correct: true},
            {text:"Tuesday",correct: false}
        ]
    },
    {
        question :`Which one of the following is not a prime number?`,
        answer :[
            {text:"91",correct: true},
            {text:"31",correct: false},
            {text:"97",correct: false},
            {text:"71",correct: false}
        ]
    },
    {
        question :`1397*1397=?`,
        answer :[
            {text:"1951608",correct: false},
            {text:"1951609",correct: true},
            {text:"1962784",correct: false},
            {text:"None of these",correct: false}
        ]
    },
    {
        question :`The sum of first five prime number is :`,
        answer :[
            {text:"27",correct: false},
            {text:"28",correct: true},
            {text:"40",correct: false},
            {text:"11",correct: false}
        ]
    },
    {
        question :`The sum of first 45 natural number is:`,
        answer :[
            {text:"2140",correct: false},
            {text:"1070",correct: false},
            {text:"1280",correct: false},
            {text:"1035",correct: true}
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
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="yt.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();