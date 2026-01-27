
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const itens = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')

let active = 0
const total = itens.length
let timer

function startAutoPlay() {
    clearInterval(timer)
    timer = setInterval(() => {
        update(1)
    }, 5000)
}

function update(direction) {
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active++
        if (active === total) active = 0
    } else if (direction < 0) {
        active--
        if (active < 0) active = total - 1
    }

    itens[active].classList.add('active')
    dots[active].classList.add('active')
    numberIndicator.textContent = String(active + 1).padStart(2, '0')
}

startAutoPlay()

prevButton.addEventListener('click', () => {
    update(-1)
    startAutoPlay()
})

nextButton.addEventListener('click', () => {
    update(1)
    startAutoPlay()
})



const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})


function toggleForm() {
    const form = document.getElementById('appleForm')
    form.style.display = form.style.display === 'flex' ? 'none' : 'flex'
}
