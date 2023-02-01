var quiz_data = [{
        question: "Which language runs in web browser?",
        a: "Java",
        b: "C",
        c: "Javascript",
        d: "Python",
        correct: "Javascript",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "Cascading Style Sheets",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "Hypertext Markup Language",
    }
];

var quiz = document.querySelector(".quiz");
var ques = document.querySelector(".text1");
var ans1 = document.querySelector("#answer1");
var ans2 = document.querySelector("#answer2");
var ans3 = document.querySelector("#answer3");
var ans4 = document.querySelector("#answer4");
var formcheckinput = document.querySelectorAll(".form-check-input");
var btn = document.querySelector(".btn");

var currentdata = 0;
var score = 0;
loadcontent();

function loadcontent() {
    deselectoptions();

    var currentquizdata = quiz_data[currentdata];
    ques.innerHTML = currentquizdata.question;
    ans1.innerHTML = currentquizdata.a;
    ans2.innerHTML = currentquizdata.b;
    ans3.innerHTML = currentquizdata.c;
    ans4.innerHTML = currentquizdata.d;

}

function deselectoptions() {
    formcheckinput.forEach((item) => item.checked = false);
}

function getSelected() {

    formcheckinput.forEach((item) => {
        if (item.checked) { answer = item.nextElementSibling.innerHTML }
    });
    return answer;
    console.log(formcheckinput);
}
btn.addEventListener("click", function() {

    var answer = getSelected();
    if (answer) {
        if (answer === quiz_data[currentdata].correct) {
            score++;

        }
        currentdata++;
        if (currentdata < quiz_data.length) {
            loadcontent();
        } else {
            quiz.innerHTML = `<h2 class="text1"> You answered ${score}/${quiz_data.length} questions correcly.</h2>
            <input type="button" value="Reload" class="form-control btn btn-outline-info" onclick="location.reload()">`
        }
    }
    console.log(answer);
})