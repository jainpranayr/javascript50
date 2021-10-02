const boxes = document.querySelectorAll(".box");

addEventListener("scroll", triggerBox);

triggerBox();

function triggerBox() {
	const trigger = (innerHeight / 5) * 4;

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		boxTop < trigger ? box.classList.add("show") : box.classList.remove("show");
	});
}
