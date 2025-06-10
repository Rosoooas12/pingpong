const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); // Obtém o contexto 2D para desenho

// Variáveis do jogo (ainda vamos definir mais)
const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;

let player1Y = (canvas.height - paddleHeight) / 2; // Posição inicial da raquete do jogador 1
let player2Y = (canvas.height - paddleHeight) / 2; // Posição inicial da raquete do jogador 2

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5; // Velocidade horizontal da bola
let ballSpeedY = 5; // Velocidade vertical da bola

// Função para desenhar a raquete
function drawPaddle(x, y, width, height) {
    ctx.fillStyle = '#FFF'; // Cor branca
    ctx.fillRect(x, y, width, height);
}

// Função para desenhar a bola
function drawBall(x, y, size) {
    ctx.fillStyle = '#FFF'; // Cor branca
    ctx.fillRect(x, y, size, size); // Desenha a bola como um quadrado por enquanto
}

// Função principal do jogo (game loop)
function gameLoop() {
    // 1. Atualizar a lógica do jogo (movimento da bola, raquetes, etc.)
    // 2. Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 3. Desenhar elementos do jogo
    drawPaddle(0, player1Y, paddleWidth, paddleHeight); // Raquete do jogador 1 (esquerda)
    drawPaddle(canvas.width - paddleWidth, player2Y, paddleWidth, paddleHeight); // Raquete do jogador 2 (direita)
    drawBall(ballX, ballY, ballSize);

    // Solicita ao navegador para chamar gameLoop novamente para o próximo frame
    requestAnimationFrame(gameLoop);
}

// Iniciar o game loop
gameLoop();
