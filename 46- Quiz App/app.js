const quizData = [
	{
		question: "Which language runs in a web browser?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "JavaScript",
		correct: "d"
	},
	{
		question: "What does CSS stand for?",
		a: "Central Style Sheets",
		b: "Cascading Style Sheets",
		c: "Cascading Simple Sheets",
		d: "Cars SUVs Sailboats",
		correct: "b"
	},
	{
		question: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Hypertext Markdown Language",
		c: "Hyperloop Machine Language",
		d: "Helicopters Terminals Motorboats Lamborginis",
		correct: "a"
	},
	{
		question: "What year was JavaScript launched?",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "none of the above",
		correct: "b"
	}
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("a_text")
const optionB = document.getElementById("b_text")
const optionC = document.getElementById("c_text")
const optionD = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
	deselectAnswers()

	const currQuizData = quizData[currQuiz]
	questionEl.innerText = currQuizData.question
	optionA.innerText = currQuizData.a
	optionB.innerText = currQuizData.b
	optionC.innerText = currQuizData.c
	optionD.innerText = currQuizData.d
}

function deselectAnswers() {
	answerEls.forEach((elm) => (elm.checked = false))
}

function getSelected() {
	let ans
	answerEls.forEach((elm) => {
		if (elm.checked) ans = elm.id
	})

	return ans
}

submitBtn.addEventListener("click", () => {
	const ans = getSelected()
	if (ans) {
		if (ans === quizData[currQuiz].correct) score++
	}

	currQuiz++
	if (currQuiz < quizData.length) loadQuiz()
	else
		quiz.innerHTML = `
		<h2>You answered ${score} / ${quizData.length} questions correctly.</ h2>

		<button onclick='location.reload()'>Reload</button>
	`
})
