let btnMenu = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')

btnMenu.onclick = () => {
  menu.classList.toggle('open')
}