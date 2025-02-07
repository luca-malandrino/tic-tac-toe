const startBtn = document.querySelector('button')
const quadrants = document.getElementsByClassName('quadrant')

startBtn.addEventListener('click', () => {
  quadrants.forEach(quad => {
    quad.addEventListener('click', function player1Move(e) {
      e.target.textContent = 'X'
      e.target.style.color = 'blueviolet'

    })
  })
})