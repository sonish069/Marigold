const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('fa-xmark')
    btn.classList.toggle('fa-bars')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})