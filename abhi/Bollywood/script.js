const Questions=[
    {
        question :`Who is known as the "King of Bollywood"?`,
        answer :[
            {text:"Shah Rukh Khan",correct: true},
            {text:"Amitabh Bachchan",correct: false},
            {text:"Salman Khan",correct: false},
            {text:"Aamir Khan",correct: false}
        ]
    },
    {
        question :`Which Bollywood actress made her Hollywood debut in the movie "Quantico"?`,
        answer :[
            {text:"Deepika Padukone",correct: false},
            {text:"Priyanka Chopra",correct: true},
            {text:"Kareena Kapoor Khan",correct: false},
            {text:"Alia Bhatt",correct: false}
        ]
    },
    {
        question :`Which movie is known for the iconic dialogue, "Mere paas maa hai"?`,
        answer :[
            {text:"Dilwale Dulhania Le Jayenge",correct: false},
            {text:"Sholay",correct: false},
            {text:"Deewaar",correct: true},
            {text:"Kabhi Khushi Kabhie Gham",correct: false}
        ]
    },
    {
        question :`Who is the director of the movie "Dilwale Dulhania Le Jayenge"?`,
        answer :[
            {text:"Karan Johar",correct: false},
            {text:"Aditya Chopra",correct: true},
            {text:"Sanjay Leela Bhansali",correct: false},
            {text:"Rohit Shetty",correct: false}
        ]
    },
    {
        question :`Which actor played the role of "Munna Bhai" in the movie series "Munna Bhai MBBS"?`,
        answer :[
            {text:"Akshay Kumar",correct: false},
            {text:"Ranbir Kapoor",correct: false},
            {text:"Sanjay Dutt",correct: true},
            {text:"Aamir Khan",correct: false}
        ]
    },
    {
        question :`Who won the National Film Award for Best Actor for the movie "Rang De Basanti"?`,
        answer :[
            {text:"Hrithik Roshan",correct: false},
            {text:"Shahid Kapoor",correct: false},
            {text:"Aamir Khan",correct: true},
            {text:"Salman Khan",correct: false}
        ]
    },
    {
        question :`Which Bollywood actress is also known as the "Dancing Queen of Bollywood"?`,
        answer :[
            {text:"Madhuri Dixit",correct: true},
            {text:"Kareena Kapoor Khan",correct: false},
            {text:"Deepika Padukone",correct: false},
            {text:"Katrina Kaif",correct: false}
        ]
    },
    {
        question :`Which Bollywood actor is known for his iconic mustache and dialogue delivery?`,
        answer :[
            {text:"Ajay Devgan",correct: false},
            {text:"Irfan Khan",correct: false},
            {text:"Anil Kapoor",correct: false},
            {text:"Amitabh Bachchan",correct: true}
        ]
    },
    {
        question :`Who composed the music for the movie "Kabhi Khushi Kabhi Gham"?`,
        answer :[
            {text:"A.R. Rahman",correct: false},
            {text:"Vishal-Shekhar",correct: false},
            {text:"Jatin-Lalit",correct: true},
            {text:"Ajay Atur",correct: false}
        ]
    },
    {
        question :`Who is the highest-grossing Bollywood actor of all time?`,
        answer :[
            {text:"Shah Rukh Khan",correct: false},
            {text:"Amir Khan",correct: false},
            {text:"Akshay Kumar",correct: false},
            {text:"Salman Khan",correct: true}
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
        Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="bollywood.html" id="restart"><h3>Restart</h3></a>`;
        Heading.remove();
        document.querySelector("#Question").remove();
        document.getElementById("Next").remove();
    }
    console.log(score);
    count=true;
});
}
startQuiz();