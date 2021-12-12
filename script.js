const actionBtn = document.querySelector('.get_btn')
const lock = document.querySelector('.faded')
const popUp1 = document.querySelector('.modal-window')
const popUp2 = document.querySelector('.modal_content')
const player = document.querySelector('iframe')

function activate() {
  popUp1.classList.add('active')
}

function deactivate() {
  popUp1.classList.remove('active')
  player.src = player.src
}

actionBtn.addEventListener('click', activate)
popUp1.addEventListener('click', deactivate)