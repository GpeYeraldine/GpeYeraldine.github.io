
let tablero
let balls = []

function setup() {

	createCanvas(windowWidth, windowHeight);

	tablero = new Tablero(windowWidth, windowHeight, color('#F4F4F4'))
}

function draw() {

	tablero.draw()
	
	for (var i = 0; i < balls.length; i++) {
		balls[i].draw()
		balls[i].move()
	}
}

function mousePressed(){

	var c = color(random(255), random(255), random(255))

	ball = new Ball(mouseX, mouseY, 60, c)
	balls.push(ball)
	
}


