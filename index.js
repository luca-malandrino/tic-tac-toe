const startBtn = document.querySelector('button')
const quadrants = document.querySelectorAll('.quadrant')
let firstPlayer = 0
let player2Score = 0
let player1Score = 0

startBtn.addEventListener('click', startGame)

function startGame() {
  let isGameOver = false
  let player = firstPlayer

  quadrants.forEach(quadrant => {
    quadrant.textContent = ''
    quadrant.addEventListener('click', function makeMove (e) {
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
            player1Score += 1
            document.querySelectorAll('.score span')[0].textContent = player1Score
          } else {
            player2Score += 1
            document.querySelectorAll('.score span')[1].textContent = player2Score
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