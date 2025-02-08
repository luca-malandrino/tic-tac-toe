const startBtn = document.querySelector('button')
const quadrants = document.querySelectorAll('.quadrant')
let firstPlayer = 0

startBtn.addEventListener('click', startGame)

function startGame() {
  let isGameOver = false
  let player = firstPlayer

  quadrants.forEach(quadrant => {
    quadrant.textContent = ''
    quadrant.addEventListener('click', e => {
      if(!isGameOver) {
        if(player && e.target.textContent === '') {
          e.target.textContent = 'O'
          e.target.style.color = 'blueviolet'
          player = 0
        } else if(e.target.textContent === '') {
          e.target.textContent = 'X'
          e.target.style.color = 'orange'
          player = 1
        }

        isGameOver = checkGameOver()

        if(isGameOver) {
          if(e.target.textContent === 'X') {
            document.querySelectorAll('.score span')[0].textContent = Number(document.querySelectorAll('.score span')[0].textContent) + 1
          } else {
            document.querySelectorAll('.score span')[1].textContent = Number(document.querySelectorAll('.score span')[1].textContent) + 1
          }
        }
      }
    })
  })

  
  firstPlayer = firstPlayer ? 0 : 1
}

function checkGameOver() {
  return (quadrants[0].textContent === quadrants[1].textContent && quadrants[1].textContent === quadrants[2].textContent && quadrants[0].textContent !== '') ||
         (quadrants[3].textContent === quadrants[4].textContent && quadrants[4].textContent === quadrants[5].textContent && quadrants[3].textContent !== '') ||
         (quadrants[6].textContent === quadrants[7].textContent && quadrants[7].textContent === quadrants[8].textContent && quadrants[6].textContent !== '') ||
         (quadrants[0].textContent === quadrants[3].textContent && quadrants[3].textContent === quadrants[6].textContent && quadrants[0].textContent !== '') ||
         (quadrants[1].textContent === quadrants[4].textContent && quadrants[4].textContent === quadrants[7].textContent && quadrants[1].textContent !== '') ||
         (quadrants[2].textContent === quadrants[5].textContent && quadrants[5].textContent === quadrants[8].textContent && quadrants[2].textContent !== '') ||
         (quadrants[0].textContent === quadrants[4].textContent && quadrants[4].textContent === quadrants[8].textContent && quadrants[0].textContent !== '') ||
         (quadrants[2].textContent === quadrants[4].textContent && quadrants[4].textContent === quadrants[6].textContent && quadrants[2].textContent !== '')
}