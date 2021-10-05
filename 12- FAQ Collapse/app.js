const btn = document.querySelectorAll(".faq-toggle");
btn.forEach((b) => {
	b.addEventListener("click", () => {
		b.parentNode.classList.toggle("active");
	});
});
