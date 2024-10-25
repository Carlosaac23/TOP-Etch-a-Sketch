const container = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  // Clean the HTML
  container.innerHTML = '';

  let squareSizeByUser = Number(prompt('How many squares do you want?'));
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
