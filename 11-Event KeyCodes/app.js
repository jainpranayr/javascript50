const insert = document.querySelector("#insert");

addEventListener("keydown", (e) => {
	insert.innerHTML = `
    <div class="key">${
			e.key === " " ? "Space" : e.key
		}<small>e.key</small></div>
    <div class="key">${
			e.keyCode === " " ? "Space" : e.keyCode
		}<small>e.keyCode</small></div>
    <div class="key">${
			e.code === " " ? "Space" : e.code
		}<small>e.code</small></div>    
    `;
});
