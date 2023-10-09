const Questions=[
    {
        question :`Which continent is known as the "Land Down Under"?`,
        answer :[
            {text:"Europe",correct: false},
            {text:"Africa",correct: false},
            {text:"Asia",correct: false},
            {text:"Australia",correct: true}
        ]
    },
    {
        question :`Which is the largest ocean in the world?`,
        answer :[
            {text:"Atlantic Ocean",correct: false},
            {text:"Indian Ocean",correct: false},
            {text:"Pacific Ocean",correct: true},
            {text:"Arctic Ocean",correct: false}
        ]
    },
    {
        question :`Which is the longest river in the world?`,
        answer :[
            {text:"Nile River",correct: true},
            {text:"Amazon River",correct: false},
            {text:"Yangtze River",correct: false},
            {text:"Mississippi River",correct: false}
        ]
    },
    {
        question :`Which country is known as the "Land of the Rising Sun"?`,
        answer :[
            {text:"China",correct: false},
            {text:"Japan",correct: true},
            {text:"South Korea",correct: false},
            {text:"Thailand",correct: false}
        ]
    },
    {
        question :`Which is the largest desert in the world?`,
        answer :[
            {text:"Sahara Desert",correct: true},
            {text:"Gobi Desert",correct: false},
            {text:"Arabian Desert",correct: false},
            {text:"Kalahari Desert",correct: false}
        ]
    },
    {
        question :`Which country is both in Europe and Asia?`,
        answer :[
            {text:"Russia",correct: true},
            {text:"Turkey",correct: false},
            {text:"Kazakhstan",correct: false},
            {text:"Iran",correct: false}
        ]
    },
    {
        question :`Which is the highest mountain in the world?`,
        answer :[
            {text:"Mount Everest",correct: true},
            {text:"K2",correct: false},
            {text:"Mount Kilimanjaro",correct: false},
            {text:"Mount McKinley",correct: false}
        ]
    },
    {
        question :`Which country is known as the "Land of Fire and Ice"?`,
        answer :[
            {text:"Iceland",correct: true},
            {text:"Norway",correct: false},
            {text:"Finland",correct: false},
            {text:"New Zealand",correct: false}
        ]
    },
    {
        question :`Which country is the largest producer of coffee in the world?`,
        answer :[
            {text:"Brazil",correct: true},
            {text:"Colombia",correct: false},
            {text:"Ethiopia",correct: false},
            {text:"Vietnam",correct: false}
        ]
    },
    {
        question :`Which country is home to the Great Barrier Reef?`,
        answer :[
            {text:"Australia",correct: true},
            {text:"Maldives",correct: false},
            {text:"Philippines",correct: false},
            {text:"Belize",correct: false}
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
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="W&G.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();