const Questions=[
    {
        question :`Which programming language is used to build web pages?`,
        answer :[
            {text:"Java",correct: false},
            {text:"Python",correct: false},
            {text:"HTML",correct: true},
            {text:"C++",correct: false}
        ]
    },
    {
        question :`What does CSS stand for?`,
        answer :[
            {text:"Cascading Style Sheets",correct: true},
            {text:"Computer Science Society",correct: false},
            {text:"Creative Style Syntax",correct: false},
            {text:"Coding Style Standards",correct: false}
        ]
    },
    {
        question :`Which programming language is known for its use in data analysis and machine learning?`,
        answer :[
            {text:"Java",correct: false},
            {text:"Python",correct: true},
            {text:"JavaScript",correct: false},
            {text:"Ruby",correct: false}
        ]
    },
    {
        question :`What is the purpose of a loop in programming?`,
        answer :[
            {text:"To store data",correct: false},
            {text:"To perform calculations",correct: false},
            {text:"To make decisions",correct: false},
            {text:"To repeat a set of instructions",correct: true}
        ]
    },
    {
        question :`What is the output of the following code snippet:<br>print(2 + 3 * 4)`,
        answer :[
            {text:"14",correct: true},
            {text:"24",correct: false},
            {text:"11",correct: false},
            {text:"9",correct: false}
        ]
    },
    {
        question :`Which data structure follows the "first-in, first-out" (FIFO) principle?`,
        answer :[
            {text:"Stack",correct: false},
            {text:"Queue",correct: true},
            {text:"Array",correct: false},
            {text:"Linked List",correct: false}
        ]
    },
    {
        question :`In object-oriented programming, what is the process of creating an instance of a class called?`,
        answer :[
            {text:"Inheritance",correct: false},
            {text:"Polymorphism",correct: false},
            {text:"Encapsulation",correct: false},
            {text:"Instantiation",correct: true}
        ]
    },
    {
        question :`Which keyword is used to define a function in Python?`,
        answer :[
            {text:"def",correct: true},
            {text:"function",correct: false},
            {text:"return",correct: false},
            {text:"class",correct: false}
        ]
    },
    {
        question :`Which symbol is used to assign a value to a variable in many programming languages?`,
        answer :[
            {text:"==",correct: false},
            {text:"===",correct: false},
            {text:"=",correct: true},
            {text:"+",correct: false}
        ]
    },
    {
        question :`What is the purpose of using version control systems like Git?`,
        answer :[
            {text:"To track changes in code",correct: true},
            {text:"To compile code",correct: false},
            {text:"To Debug code",correct: false},
            {text:"To execute code",correct: false}
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
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="coding.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();