const toggles = document.querySelectorAll(".toggle")
const goodEl = document.querySelector("#good")
const cheapEl = document.querySelector("#cheap")
const fastEl = document.querySelector("#fast")

toggles.forEach((toggle) => {
	toggle.addEventListener("change", (e) => applyLogic(e.target))
})

function applyLogic(clicked) {
	if (goodEl.checked && cheapEl.checked && fastEl.checked) {
		if (good === clicked) {
			fastEl.checked = false
		}

		if (cheapEl === clicked) {
			goodEl.checked = false
		}

		if (fastEl === clicked) {
			cheapEl.checked = false
		}
	}
}
