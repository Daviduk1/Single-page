document.querySelector('.navigation').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.hamburger').classList.toggle('active')
})