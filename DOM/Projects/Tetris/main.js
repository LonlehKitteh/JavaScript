const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

const ROW = 20;
const COL = 10;
const SQ = 20;
const VACANT = "white";

// draw a square
function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    ctx.strokeStyle = "black";
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

// create the borad

let board = [];
for (let r = 0; r < ROW; r++) {
    board[r] = [];
    for (let c = 0; c < COL; c++) {
        board[r][c] = VACANT;
    }
}
// draw the board

function drawBoard() {
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}

drawBoard();

// pieces and their colors

const PIECES = [
    [Z, "red"],
    [S, "green"],
    [T, "yellow"],
    [O, "blue"],
    [L, "purple"],
    [I, "cyan"],
    [J, "orange"]
];

// generate random piece
function randomPiece() {
    let r = Math.floor(Math.random() * PIECES.length);
    return new Piece(PIECES[r][0], PIECES[r][1])
}

let p = randomPiece();

// The Object Piece 

function Piece(tetrmino, color) {
    this.tetrmino = tetrmino;
    this.color = color;

    this.tetrminoN = 0;
    this.activeTetromino = this.tetrmino[this.tetrminoN];

    this.x = 3;
    this.y = -2;
}

// fill function

Piece.prototype.fill = function (color) {
    for (let r = 0; r < this.activeTetromino.length; r++) {
        for (let c = 0; c < this.activeTetromino.length; c++) {
            if (this.activeTetromino[r][c]) {
                drawSquare(this.x + c, this.y + r, color);
            }
        }
    }
}

// draw piece

Piece.prototype.draw = function () {
    this.fill(this.color);
}
// undraw piece

Piece.prototype.unDraw = function () {
    this.fill(VACANT);
}

// move down piece

Piece.prototype.moveDown = function () {
    if (!this.collision(0, 1, this.activeTetromino)) {
        this.unDraw();
        this.y++;
        this.draw();
    } else {
        this.lock();
        p = randomPiece();
    }
}

// move right piece

Piece.prototype.moveRight = function () {
    if (!this.collision(1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x++;
        this.draw();
    }
}

// move left piece

Piece.prototype.moveLeft = function () {
    if (!this.collision(-1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x--;
        this.draw();
    }
}

// rotate the piece

Piece.prototype.rotate = function () {
    let nextPattern = this.tetrmino[(this.tetrminoN + 1) % this.tetrmino.length]
    let kick = 0;
    if (this.collision(0, 0, nextPattern)) {
        if (this.x > COL / 2) {
            kick = -1;
        } else {
            kick = 1;
        }
    }
    if (!this.collision(kick, 0, nextPattern)) {
        this.unDraw();
        this.x += kick;
        this.tetrminoN = (this.tetrminoN + 1) % this.tetrmino.length;
        this.activeTetromino = this.tetrmino[this.tetrminoN];
        this.draw();
    }
}

// lock piece

let score = 0;
Piece.prototype.lock = function () {
    for (let r = 0; r < this.activeTetromino.length; r++) {
        for (let c = 0; c < this.activeTetromino.length; c++) {
            if (!this.activeTetromino[r][c]) {
                continue;
            }
            if (this.y + r < 0) {
                alert("Game Over");
                gameOver = true;
                break;
            }
            board[this.y + r][this.x + c] = this.color;
        }
    }
    for (r = 0; r < ROW; r++) {
        let isRowFull = true;
        for(c = 0;c < COL;c++){
            isRowFull = isRowFull && (board[r][c] != VACANT);
        }
        if(isRowFull){
            for(y = r; y > 1;y--){
                for(c = 0;c < COL;c++){
                    board[y][c] = board[y - 1][c];
                }
            }
            for(c = 0;c < COL;c++){
                board[0][c] = VACANT;
            }
            score += 10;
        }
    }
    drawBoard();

    scoreElement.innerHTML = score;
}

// collision function

Piece.prototype.collision = function (x, y, piece) {
    for (let r = 0; r < piece.length; r++) {
        for (let c = 0; c < piece.length; c++) {
            if (!piece[r][c]) {
                continue;
            }

            let newX = this.x + c + x;
            let newY = this.y + r + y;

            if (newX < 0 || newX >= COL || newY >= ROW) {
                return true;
            }
            if (newY < 0) {
                continue;
            }
            if (board[newY][newX] != VACANT) {
                return true;
            }
        }
    }
    return false;
}

// CONTROL the piece

document.addEventListener("keydown", CONTROL);

function CONTROL(event) {
    if (event.keyCode == 37) {
        p.moveLeft();
        dropStart = Date.now();
    } else if (event.keyCode == 38) {
        p.rotate();
        dropStart = Date.now();
    } else if (event.keyCode == 39) {
        p.moveRight()
        dropStart = Date.now();
    } else if (event.keyCode == 40) {
        p.moveDown();
    }
}

let dropStart = Date.now();
let gameOver = false;
function drop() {
    let now = Date.now();
    let delta = now - dropStart;
    if (delta > 500) {
        p.moveDown();
        dropStart = Date.now();
    }
    if (!gameOver) {
        requestAnimationFrame(drop);
    }
}
drop();