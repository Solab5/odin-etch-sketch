

// function makeGrids(sizeColumn, sizeRow){
//     const container = document.querySelector('.container');
//     for (let i = 0; i<sizeColumn; i++){
//         let column = document.createElement('div');
//         column.classList.add("column");
//         for (let j=0; j<sizeRow; j++){
//             let row = document.createElement('div');
//             row.classList.add('row');
//             row.style.border = "1px solid black";
//             row.innerText = (i*sizeRow) + j;
//             column.append(row);

//         }
//         container.appendChild(column);
//     }
// };

function makeGrids(sizeColumn, sizeRow){
    const container = document.querySelector('.container');
    for (let c = 0; c<(sizeColumn * sizeRow); c++){
        let cell = document.createElement('div');
        cell.classList.add("cell");
        cell.style.border = "1px solid black";
        cell.innerText = c + 1;
        container.appendChild(cell);
    };
};

const Button = document.querySelector('button');

Button.addEventListener('click', promptButton);

function promptButton(){

    const sizeOfSquare = prompt("How many number of squares per side do you want for the new grid.");
    if (sizeOfSquare <= 100) {
        makeGrids(sizeOfSquare, sizeOfSquare);
    } else {
        alert("The number of squares must be less than 100 ")
    };

    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = "orange";
        });

        cell.addEventListener('mouseleave', (event) => {
            event.target.style.backgroundColor = "";
        });
    });
}
