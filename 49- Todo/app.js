const form = document.querySelector("#form")
const input = document.querySelector("#input")
const todos = document.querySelector("#todos")

const todos_LS = JSON.parse(localStorage.getItem("todos"))
if (todos_LS) todos_LS.forEach((todo) => addTodo(todo))

form.addEventListener("submit", (e) => {
	e.preventDefault()
	addTodo()
})

function addTodo(todo) {
	let todoText = input.value

	if (todo) todoText = todo.text
	if (todoText) {
		const todoEl = document.createElement("li")
		if (todo && todo.completed) todoEl.classList.add("completed")
		todoEl.innerText = todoText

		todoEl.addEventListener("click", () => {
			todoEl.classList.toggle("completed")
			updateLS()
		})
		todoEl.addEventListener("dblclick", () => {
			todoEl.remove()
			updateLS()
		})

		todos.appendChild(todoEl)

		input.value = ""
		updateLS()
	}
}

function updateLS() {
	const todosEL = document.querySelectorAll("li")
	const todosArr = []

	todosEL.forEach((todoEl) =>
		todosArr.push({
			text: todoEl.innerText,
			completed: todoEl.classList.contains("completed")
		})
	)

	localStorage.setItem("todos", JSON.stringify(todosArr))
}
