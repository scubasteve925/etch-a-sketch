const container = document.querySelector('.container')

function createGrid(rows, columns) {
for(r=0;r < rows * columns;r++) {
let div = document.createElement('div');
div.innerHTML = '';
container.appendChild(div).className = "div-element";
}
}

createGrid(16, 16);

let divElement = document.querySelector('.div-element')

container.addEventListener('mouseover', e => {
//code that changes white to black
})