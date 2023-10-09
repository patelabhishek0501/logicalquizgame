const Questions=[
    {
        question :`What is the smallest unit of matter?`,
        answer :[
            {text:"Atom",correct: true},
            {text:"Molecule",correct: false},
            {text:"Cell",correct: false},
            {text:"Electron",correct: false}
        ]
    },
    {
        question :`What is the process by which plants convert sunlight into chemical energy?`,
        answer :[
            {text:"Photosynthesis",correct: true},
            {text:"Respiration",correct: false},
            {text:"Fermentation",correct: false},
            {text:"Combustion",correct: false}
        ]
    },
    {
        question :`What is the study of heredity and variation in living organisms?`,
        answer :[
            {text:"Genetics",correct: true},
            {text:"Ecology",correct: false},
            {text:"Evolution",correct: false},
            {text:"Biotechnology",correct: false}
        ]
    },
    {
        question :`Which of the following is a renewable source of energy?`,
        answer :[
            {text:"Coal",correct: false},
            {text:"Natural gas",correct: false},
            {text:"Solar power",correct: true},
            {text:"Nuclear power",correct: false}
        ]
    },
    {
        question :`What is the main component of the Earth's atmosphere?`,
        answer :[
            {text:"Oxygen",correct: true},
            {text:"Nitrogen",correct: false},
            {text:"Carbon dioxide",correct: false},
            {text:"Hydrogen",correct: false}
        ]
    },
    {
        question :`What is the process of converting a solid directly into a gas called?`,
        answer :[
            {text:"Sublimation",correct: true},
            {text:"Evaporation",correct: false},
            {text:"Condensation",correct: false},
            {text:"Melting",correct: false}
        ]
    },
    {
        question :`What is the fundamental unit of information in computing?`,
        answer :[
            {text:"Bit",correct: true},
            {text:"Byte",correct: false},
            {text:"Megabyte",correct: false},
            {text:"Gigabyte",correct: false}
        ]
    },
    {
        question :`Which scientist is known for his theory of relativity?`,
        answer :[
            {text:"Isaac Newton",correct: false},
            {text:"Albert Einstein",correct: true},
            {text:"Galileo Galilei",correct: false},
            {text:"Nikola Tesla",correct: false}
        ]
    },
    {
        question :`What is the process of encoding information into a form that can be stored and retrieved later?`,
        answer :[
            {text:"Encryption",correct: false},
            {text:"Decryption",correct: false},
            {text:"Encoding",correct: true},
            {text:"Decoding",correct: false}
        ]
    },
    {
        question :`What is the branch of science that deals with the study of the Earth's physical structure and substance?`,
        answer :[
            {text:"Geology",correct: true},
            {text:"Astronomy",correct: false},
            {text:"Meteorology",correct: false},
            {text:"Biology",correct: false}
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
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="s&t.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();