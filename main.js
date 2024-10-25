const container = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  // Clean the HTML
  container.innerHTML = '';

  let squareSizeByUser = Number(prompt('Enter a grid size between 1 and 100'));
  if (squareSizeByUser === 0) return alert('At leats one value');
  if (squareSizeByUser > 100) {
    alert('You should enter a smaller number than 100');
    return;
  }

  // Square size
  const squareSize = 100 / squareSizeByUser;

  for (let i = 0; i < squareSizeByUser; i++) {
    for (let j = 0; j < squareSizeByUser; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${squareSize}%`;
      square.style.height = `${squareSize}%`;

      square.addEventListener('mouseover', () => (square.style.backgroundColor = '#1f1f1f'));

      container.appendChild(square);
    }
  }
});
