const btnShowHide = document.querySelector('.btn-show-hide')
const spanText = document.querySelector('.span-text')
const blockForSpace = document.getElementById('block')
let blockExist = true

btnShowHide.addEventListener('click', () => {
  spanText.classList.toggle('invisible')
})

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 32 && blockExist === true) {
    event.preventDefault()
    blockForSpace.remove()
    blockExist = false
  }
})
