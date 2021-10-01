const panels = document.querySelectorAll(".panel");

const removeToggleClasses = () =>
	panels.forEach((panel) => panel.classList.remove("active"));

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeToggleClasses();
		panel.classList.add("active");
	});
});
