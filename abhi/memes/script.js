const Questions=[
    {
        question :`Who says "Ram Ram Bhai Sareya ne" in the beginning of his videos?`,
        answer :[
            {text:"CBUM",correct: false},
            {text:"Gaurav Taneja",correct: false},
            {text:"Ankit Jatav",correct: false},
            {text:"Ankit Baiyanpuriya",correct: true}
        ]
    },
    {
        question :`Who says "Hamare Yaha aesa hi hota hai" ?`,
        answer :[
            {text:"Akash Dodeja",correct: false},
            {text:"Ashish Chanchalani",correct: true},
            {text:"Carryminati",correct: false},
            {text:"Bhuvan Bam",correct: false}
        ]
    },
    {
        question :`Who composed the song "Aee Rupali" ?`,
        answer :[
            {text:"Ashish Chanchalani",correct: false},
            {text:"Carryminati",correct: true},
            {text:"Slayypoint",correct: false},
            {text:"Technical Guruji",correct: false}
        ]
    },
    {
        question :`Who is also referred to as "DJ Rajesh"?`,
        answer :[
            {text:"Technical Guruji",correct: false},
            {text:"Mythpat",correct: false},
            {text:"Tech Burner",correct: true},
            {text:"Saurabh Joshi",correct: false}
        ]
    },
    {
        question :`Who says "Jhukke rhna padega mere aage, kyuki me khud me ak hero hu" ?`,
        answer :[
            {text:"Hindustani Bhau",correct: false},
            {text:"Elvish Yadav",correct: false},
            {text:"Puneet Superstar",correct: true},
            {text:"Deepak Kalal",correct: false}
        ]
    },
    {
        question :`The word "Systum" is assosiated with which Indian Influencer??`,
        answer :[
            {text:"Dhruv Rathee",correct: false},
            {text:"Salman Khan",correct: false},
            {text:"Elvish Yadav",correct: true},
            {text:"Abhishek Malhan",correct: false}
        ]
    },
    {
        question :`Which Web series features the dialogue "Gajab Bejjati hai yaar.."?`,
        answer :[
            {text:"Asur",correct: false},
            {text:"Family Man",correct: false},
            {text:"Apaharan",correct: false},
            {text:"Panchayat",correct: true}
        ]
    },
    {
        question :`Who said "Hum pe toh hai hi nau" ?`,
        answer :[
            {text:"Dank Rishu",correct: false},
            {text:"Arpit Bala",correct: true},
            {text:"ZaidZiz",correct: false},
            {text:"Thugesh",correct: false}
        ]
    },
    {
        question :`"Hum Bhi Bana Lenge" is said by which "Shark"?`,
        answer :[
            {text:"Namita Thapar",correct: false},
            {text:"Ashneer Grover ",correct: false},
            {text:"Piyush Bansal ",correct: false},
            {text:"Aman Gupta",correct: true}
        ]
    },
    {
        question :`"Risk hai Toh Ishq Hai" was said by which Character ?`,
        answer :[
            {text:"Abdul Telgi",correct: false},
            {text:"Daud Ibrahim",correct: true},
            {text:"Harshad Mehta",correct: false},
            {text:"Vijay Malya",correct: false}
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
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="memes.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();