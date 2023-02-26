const data = [{
    Question: "1: HTML stands for-",
    a: "  HighText Machine Language",
    b: "HyperText and links Markup Language",
    c: "HyperText Markup Language    ",
    d: "None of these",
    ans: "ans3"
},
{   Question: "2:The correct sequence of HTML tags for starting a webpage is",
a: "Head, Title, HTML, body",
b: "HTML, Body, Title, Head",
c: "HTML, Head, Title, Body",
d: "HTML, Head, Title, Body",
ans: "ans4"

},
{   Question: "3: Which of the following element is responsible for making the text bold in HTML?",
a: "<pre>",
b: "<a>",
c: "<b>",
d: "<br>",
ans: "ans3"

},
{   Question: "4: Which of the following tag is used for inserting the largest heading in HTML?",
a: "<h3>",
b: "<H1>",
c: "<H5>",
d: "<H6>",
ans: "ans2"

},
{   Question: "5: Which of the following tag is used to insert a line-break in HTML?",
a: "<br>",
b: "<a>",
c: "<pre>",
d: "<b>",
ans: "ans1"

}]
// here we get of all html dom element------------------------------>

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const answers = document.querySelectorAll('.answer');
const submit = document.getElementById("submit");
const showScore = document.querySelector("#score-div")
const needToSelectDiv = document.querySelector("#need-select");
const colorChanger1 = document.querySelector('.one');
const colorChanger2 = document.querySelector('.two');
const colorChanger3 = document.querySelector('.third');

const innerDivColor = document.querySelector('.inner-div-quesstion');

let questionCount = 0;
let score = 0;

// load questions function =---------------------------------------------------->
const loadQuestions = ()=>{
    const questionList = data[questionCount];
    question.innerText =questionList.Question;
    option1.innerText=questionList.a
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
    console.log(option4)
};

loadQuestions();

// get checked option id  function ------------------------------------------------------------>

const getcheckedAnswer = ()=>{
    let answer;
answers.forEach((optionElemt )=> {
    if(optionElemt.checked){
        answer=optionElemt.id;
    }
    
});
return answer;
}


const deSelectOptions = ()=>{
    answers.forEach((options)=>{
        options.checked=false;
    })
}

colorChanger1.addEventListener("click",()=>{
    const color = ()=>{
        innerDivColor.style.backgroundColor = "#FF7F50";
    }
    color();
})

colorChanger2.addEventListener("click",()=>{
    const color = ()=>{
        innerDivColor.style.backgroundColor = "#DA70D6";
    }
    color();
})

colorChanger3.addEventListener("click",()=>{
    const color = ()=>{
        innerDivColor.style.backgroundColor = "#FFFF00";
    }
    color();
})



// here is sumbit button -------------------------------------------->

submit.addEventListener("click",()=>{
    const checkedAnswer = getcheckedAnswer();
    // console.log(checkedAnswer);

    if(checkedAnswer === data[questionCount].ans){
score++;
    }


if(checkedAnswer != null){
    questionCount++
    needToSelectDiv.style.display = 'none';
}else{
   
    needToSelectDiv.style.display = 'block'
    needToSelectDiv.innerHTML = `<h3>Need to select an option<h3>`;
}

deSelectOptions();

console.log(questionCount)
if(questionCount < data.length){
    loadQuestions();
}else{
    showScore.innerHTML = `
    <h2>you score ${score}/${data.length}<h2>
    <button class="submitButton" onclick="location.reload()">Play Again<button>`;
    showScore.classList.remove('scoreArea');
    submit.style.display = 'none';
}
})

