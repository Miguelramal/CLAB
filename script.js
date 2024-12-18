const infoButton = document.getElementById('info-button');
const infoText = document.getElementById('info-text');
const svgContainer = document.getElementById('svg-container');

// Letras disponibles y sus estilos
const letters = ['C', 'L', 'A', 'B'];
const styles = [1, 2, 3, 4];

// Función para mostrar/ocultar el texto al hacer clic en el botón
infoButton.addEventListener('click', () => {
  // Alterna la visibilidad del texto al hacer clic en el botón
  infoText.classList.toggle('hidden');
});

// Generar un archivo SVG aleatorio para una letra
function getRandomSVG(letter) {
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  return `https://raw.githubusercontent.com/Miguelramal/CLAB/main/${letter}${randomStyle}.svg`;
}

// Cambiar aleatoriamente las letras cada cierto tiempo
function changeLetters() {
  const svgElements = svgContainer.querySelectorAll('.svg-letter');
  svgElements.forEach((svg, index) => {
    const randomSVG = getRandomSVG(letters[index]);
    svg.setAttribute('src', randomSVG);
  });
}

// Cambiar las letras automáticamente cada 2 segundos
setInterval(changeLetters, 500);