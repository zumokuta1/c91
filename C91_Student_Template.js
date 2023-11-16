var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var car1_width = 120;
var car1_height = 70;
var car1_image = new Image();
car1_image.src = 'car1.png';
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = new Image();
car2_image.src = 'car2.png';
var car2_x = 10;
var car2_y = 100;

var background_image = new Image();
background_image.src = 'racing.jpg';

background_image.onload = function () {
	car1_image.onload = function () {
		car2_image.onload = function () {
			add();
		};
	};
};

function add() {
	uploadBackground();
	uploadcar1();
	uploadcar2();
}

function uploadBackground() {
	ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
	ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
	keyPressed = e.key;
	console.log(keyPressed);
	if (keyPressed === 'ArrowUp') car1_up();
	if (keyPressed === 'ArrowDown') car1_down();
	if (keyPressed === 'ArrowLeft') car1_left();
	if (keyPressed === 'ArrowRight') car1_right();
	if (keyPressed === 'w') car2_up();
	if (keyPressed === 's') car2_down();
	if (keyPressed === 'a') car2_left();
	if (keyPressed === 'd') car2_right();
}

function car1_up() {
	if (car1_y >= 0) {
		car1_y -= 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car1_down() {
	if (car1_y <= canvas.height - car1_height) {
		car1_y += 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car1_left() {
	if (car1_x >= 0) {
		car1_x -= 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car1_right() {
	if (car1_x <= canvas.width - car1_width) {
		car1_x += 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
		if (car1_x >= 670) {
			document.getElementById('game_status').innerText = 'Carro 1 gana!';
		}
	}
}

function car2_up() {
	if (car2_y >= 0) {
		car2_y -= 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car2_down() {
	if (car2_y <= canvas.height - car2_height) {
		car2_y += 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();

		// Verificación de la posición y del carro 2
	}
}

function car2_left() {
	if (car2_x >= 0) {
		car2_x -= 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
		// Verificación de la posición y del carro 2
	}
}

function car2_right() {
	if (car2_x <= canvas.width - car2_width) {
		car2_x += 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
		if (car2_x >= 670) {
			document.getElementById('game_status').innerText = 'Carro 2 gana!';
		}

	}
}