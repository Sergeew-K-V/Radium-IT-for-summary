const btnShowHide = document.querySelector('.btn-show-hide')
const spanText = document.querySelector('.span-text')
const blockForSpace = document.getElementById('block')
let blockExist = true
let spanTextVisible = true

btnShowHide.addEventListener('click', () => {
  spanText.classList.toggle('invisible')
  if (spanTextVisible === true) {
    btnShowHide.textContent = 'Show text'
    spanTextVisible = false
  } else {
    btnShowHide.textContent = 'Hide text'
  }
})

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 32 && blockExist === true) {
    event.preventDefault()
    blockForSpace.remove()
    blockExist = false
  }
})
