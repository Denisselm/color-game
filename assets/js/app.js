//declaracion de variables
let numSquares = 6;
let color = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let btnfacil = document.querySelector("#btnfacil");
let btndificil = document.querySelector("#btndificil")

//eventos click para dar funcionalidad a los botones
btnfacil.addEventListener("click", function() {
    btnfacil.classList.add("selected");
    btndificil.classList.remove("selected");
    numSquares = 3;
    color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (color[i]) {
            squares[i].style.backgroundColor = color[i];
        } else {
            squares[i].style.display = "none";
        }
    }

})

btndificil.addEventListener("click", function() {
    btnfacil.classList.remove("selected");
    btndificil.classList.add("selected");
    numSquares = 6;
    color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color[i];
        squares[i].style.display = "block";
    }


})

//funcion para resetear el juego
reset.addEventListener("click", function() {
    console.log("clicked")
        // generar nuevo color
    color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "Nuevos Colores"
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = "green";
})


colorDisplay.textContent = pickedColor;
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color[i];

    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        console.log(pickedColor, clickedColor)
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "¡Correcto!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "play again?";
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Intentalo nuevamente!"
        }
    })
}

//funcion para cambiar los colores
function changeColors(colors) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors
    }
}


//funcion para escoger color aleatorio
function pickColor() {
    let random = Math.floor(Math.random() * color.length);
    return color[random];

}

//funcion para subir el color aleatorio escogido por la funcion
function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomcolores());
    }
    return arr;
}

//funcion para generar el proceso aleatorio
function randomcolores() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}