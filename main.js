const grid = document.querySelector('.grid')

let currentShooterIndex = 200
let width = 300

for (let i = 0; i < 225; i++) {
  const square = document.createElement('div')
  grid.appendChild(square)
}

const squares = [...document.querySelectorAll('.grid div')]

console.log(squares)

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
]

const draw = () => {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add('invader')
  }
}

draw()


squares[currentShooterIndex].classList.add('shooter')


const moveShooter = (evemt) => {
  squares[currentShooterIndex].classList.remove('shooter')
  switch (event.key) {
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0) {
        currentShooterIndex -= 1
      }
      break;
    case 'ArrowRight':
      if (currentShooterIndex % width < width - 1) {
        currentShooterIndex += 1
      }
  }
  squares[currentShooterIndex].classList.add('shooter')

}

document.addEventListener('keydown', moveShooter)
