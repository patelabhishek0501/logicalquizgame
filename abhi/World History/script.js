const Questions=[
    {
        question :`Who was the first President of the United States?`,
        answer :[
            {text:"George Washington",correct: true},
            {text:"Abraham Lincoln",correct: false},
            {text:"Thomas Jefferson",correct: false},
            {text:"Benjamin Franklin",correct: false}
        ]
    },
    {
        question :`In which year did World War II end?`,
        answer :[
            {text:"1943",correct: false},
            {text:"1945",correct: true},
            {text:"1950",correct: false},
            {text:"1939",correct: false}
        ]
    },
    {
        question :`Who painted the Mona Lisa?`,
        answer :[
            {text:"Pablo Picasso",correct: false},
            {text:"Vincent van Gogh",correct: false},
            {text:"Leonardo da Vinci",correct: true},
            {text:"Michelangelo",correct: false}
        ]
    },
    {
        question :`Which ancient civilization built the Great Pyramids of Giza?`,
        answer :[
            {text:"Roman Empire",correct: false},
            {text:"Ancient Greece",correct: false},
            {text:"Ancient Egypt",correct: true},
            {text:"Mesopotamia",correct: false}
        ]
    },
    {
        question :`Who was the first woman to win a Nobel Prize?`,
        answer :[
            {text:"Marie Curie",correct: true},
            {text:"Rosa Parks",correct: false},
            {text:"Amelia Earhart",correct: false},
            {text:"Margaret Thatcher",correct: false}
        ]
    },
    {
        question :`The Renaissance period originated in which country??`,
        answer :[
            {text:"Italy",correct: true},
            {text:"France",correct: false},
            {text:"England",correct: false},
            {text:"Spain",correct: false}
        ]
    },
    {
        question :`Who wrote the play Romeo and Juliet?`,
        answer :[
            {text:"William Shakespeare",correct: true},
            {text:"Oscar Wilde",correct: false},
            {text:"Jane Austen",correct: false},
            {text:"Charles Dickens",correct: false}
        ]
    },
    {
        question :`Which event marked the beginning of the French Revolution?`,
        answer :[
            {text:"Storming of the Bastille",correct: true},
            {text:"Boston Tea Party",correct: false},
            {text:"American Revolution",correct: false},
            {text:"Battle of Waterloo",correct: false}
        ]
    },
    {
        question :`Who was the first person to orbit the Earth?`,
        answer :[
            {text:"Neil Armstrong",correct: false},
            {text:"Yuri Gagarin",correct: true},
            {text:"John F. Kennedy",correct: false},
            {text:"Buzz Aldrin",correct: false}
        ]
    },
    {
        question :`Which country was the first to explore and colonize the Americas?`,
        answer :[
            {text:"Spain",correct: true},
            {text:"Portugal",correct: false},
            {text:"England",correct: false},
            {text:"France",correct: false}
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
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="WH.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();