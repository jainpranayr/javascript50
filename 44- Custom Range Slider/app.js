const range = document.querySelector("#range")

range.addEventListener("input", (e) => {
	const val = +e.target.value
	const label = e.target.nextElementSibling
	label.innerHTML = val

	const rangeWidth = getComputedStyle(e.target).getPropertyValue("width")
	const rangeWidthAsNum = +rangeWidth.substring(0, rangeWidth.length - 2)

	const labelWidth = getComputedStyle(label).getPropertyValue("width")
	const labelWidthAsNum = +labelWidth.substring(0, labelWidth.length - 2)

	const min = +e.target.min
	const max = +e.target.max

	const left =
		val * (rangeWidthAsNum / max) -
		labelWidthAsNum / 2 +
		scale(val, min, max, 10, -10)

	label.style.left = `${left}px`
})

const scale = (num, in_min, in_max, out_min, out_max) =>
	((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
