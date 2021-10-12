const imgs = document.querySelectorAll('.content')
const btns = document.querySelectorAll('li')

btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        hideAllImgs()
        hideAllBtns()

        btn.classList.add('active')
        imgs[idx].classList.add('show')

    })
})

function hideAllImgs() {
    imgs.forEach(img => img.classList.remove('show'))
}

function hideAllBtns() {
    btns.forEach(btn => btn.classList.remove('active'))
}