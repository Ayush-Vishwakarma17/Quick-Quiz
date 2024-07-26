const questions = [
    {
        question: "Who is Aryan's pasandida stree?",
        answers:[
            {text: "Seventeen", correct: false},
            {text: "Mamta Mayee Panda", correct: false},
            {text: "Hidimba", correct: true},
            {text: "Shaktimaan", correct: false},
        ]
    },
    {
        question: "Who is Aviral Bhauu's Bhavishya ki stree?",
        answers:[
            {text: "Koi bhi Russian", correct: false},
            {text: "Bani he nahi", correct: false},
            {text: "Shaktimaan", correct: true},
            {text: "Aishwarya Rai's Daughter", correct: false}, 
        ] 
    },
    {
        question: "Who is Ashish Bhauu's Future Tsuma(Wife)?",
        answers:[
            {text: "Koi bhi Mangolian Mahila", correct: false},
            {text: "Shukla ji", correct: true},
            {text: "Single Forever(Which is not true)", correct: false},
            {text: "None of the above", correct: false}, 
        ] 
    },
    {
        question: "Who is kamal ji's Stree?",
        answers:[
            {text: "Koi bhi Nepali Stree", correct: false},
            {text: "Poori Brahmhhand ki streeya", correct: false},
            {text: "Seventeen (known as Thank yuuu)", correct: true},
            {text: "Single Forever", correct: false}, 
        ] 
    },
    {
        question: "Who is Harinam's Bhavishya ki stree?",
        answers:[
            {text: "Koi bhi Russian", correct: false},
            {text: "Florance", correct: true},
            {text: "Anjali(Pata nahi kon hai)", correct: false},
            {text: "Modi ji's Daughter", correct: false}, 
        ] 
    },
    {
    question: "Who is Dixit Bhauu's Bhavishya ki stree?",
    answers:[
        {text: "Avni", correct: true},
        {text: "Avni", correct: true},
        {text: "Avni", correct: true},
        {text: "Avni", correct: true}, 
    ] 
}

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
selectedBtn.classList.add("correct");
score++;
    }else{
        selectedBtn.classList.add("inCorrect");
    }

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});

nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
