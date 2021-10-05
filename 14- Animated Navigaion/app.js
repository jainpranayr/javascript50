const navEl = document.querySelector("#nav");
const trig = document.querySelector("#toggle");

trig.addEventListener("click", () => navEl.classList.toggle("active"));
