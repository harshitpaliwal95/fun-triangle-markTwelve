const areaButtonObj = {
    HalfBaseHeightButton: document.querySelector("#half-base-height"),
    withHypotenuseButton: document.querySelector("#with-hypotenuse"),
    allSidesGivenButton: document.querySelector("#all-sides"),
    eqilatralTriangleButton: document.querySelector("#equilateral-triangle"),
    givenAnAngleButton: document.querySelector("#with-angle"),
}
const areaDivObj = {
    HalfBaseHeight: document.querySelector(".base-height"),
    withHypotenuse: document.querySelector(".hypo-perpendi"),
    allSidesGiven: document.querySelector(".all-sides-area"),
    eqilatralTriangle: document.querySelector(".equivalent-triangle-area"),
    givenAnAngle: document.querySelector(".given-an-angle-toArea"),
}
clearDivs(areaDivObj)
for (let key in areaButtonObj) {
    displayDivBasedOnButtonClicked(key, areaDivObj, areaButtonObj)
}

//logic 1
const lg1Base = document.querySelector("#base-for-area");
const lg1Height = document.querySelector("#height-for-area");
const btnArea1 = document.querySelector("#submit-area1");
btnArea1.addEventListener('click', function () {
    if (lg1Base.value > 0 && lg1Height.value > 0) {
        message.innerText = "Area is " + 0.5 * lg1Base.value * lg1Height.value
    } else {
        message.innerText = "Enter Valid Input"
    }
})

//logic 2
const lg2Hypotenuse = document.querySelector("#hypotenuse-for-area");
const lg2Perpendicular = document.querySelector("#perpendicular-for-area");
const btnArea2 = document.querySelector("#submit-area2");
btnArea2.addEventListener('click', function () {
    let lg2Base = Math.sqrt(Math.pow(Number(lg2Hypotenuse.value), 2) - Math.pow(Number(lg2Perpendicular.value), 2))
    //if hypotenuse is less then lg2Base become imaginary
    if (Number(lg2Hypotenuse.value) > 0 && Number(lg2Perpendicular.value) > 0) {
        if (Number(lg2Hypotenuse.value) > Number(lg2Perpendicular.value)) {
            console.log("h is great")
            message.innerText = "Area is " + 0.5 * lg2Base * Number(lg2Perpendicular.value)
        } else {
            console.log("h is small")
            message.innerText = "Hypotenuse should be largest side of the Triangle"
        }
    } else {
        message.innerText = "Enter Valid Input"
    }
})

//logic3
const sideOne = document.querySelector("#Side1-for-area");
const sideTwo = document.querySelector("#Side2-for-area");
const sideThree = document.querySelector("#Side3-for-area");
const btnArea3 = document.querySelector("#submit-area3");

btnArea3.addEventListener('click', function () {
    let a = Number(sideOne.value);
    let b = Number(sideTwo.value);
    let c = Number(sideThree.value)
    let perimeter = a + b + c;
    let s = perimeter / 2;
    let area3 = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    if (a > 0 && b > 0 && c > 0) {
        message.innerText = "Area is " + area3
    } else {
        message.innerText = "Enter Valid Input"
    }
})

//logic 4
const lg4Side = document.querySelector("#side-length-for-area");
const btnArea4 = document.querySelector("#submit-area4");

btnArea4.addEventListener('click', function () {
    let a = Number(lg4Side.value)
    let area4 = (Math.sqrt(3) / 4) * a * a;
    if (a > 0) {
        message.innerText = "Area is " + area4
    } else {
        message.innerText = "Enter Valid Input"
    }
})

//logic 5
const lg5SideOne = document.querySelector("#area5Side1-for-area");
const lg5SideTwo = document.querySelector("#area5Side2-for-area");
const lg5Angle = document.querySelector("#angle3-for-area")
const btnArea5 = document.querySelector("#submit-area5");
btnArea5.addEventListener('click', function () {
    let lg5a = Number(lg5SideOne.value)
    let lg5b = Number(lg5SideTwo.value)
    let lg5c = (Math.PI / 180) * Number(lg5Angle.value)
    let area5 = ((lg5a * lg5b) / 2) * (Math.sin(lg5c))
    if (lg5a > 0 && lg5b > 0 && lg5c > 0) {
        message.innerText = "Area is " + area5
    } else {
        message.innerText = "Enter Valid Input"
    }
})


//quiz
const questions = document.querySelector(".quizForm")
const btnQuiz = document.querySelector("#btn-submit-quiz");
const currectAnswers = ["right", "Isosceles Triangle", "93"]

btnQuiz.addEventListener('click', function () {
    let formResults = new FormData(questions)
    let scores = 0;
    let answers = []
    for (let events of formResults.entries()) {
        answers.push(events[1])
    }
    for (let i = 0; i < currectAnswers.length; i++) {
        if (answers[i] === currectAnswers[i]) {
            scores++
        }
    }
    message.innerText = "Your Score is " + scores
    scores = 0
})