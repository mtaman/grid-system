let gridcol = 12;
let grid1 = document.getElementById('grid1');

grid1.innerHTML = `<h1>Grid System </h1>`;
for (let i = 1; i <= gridcol; i++) {

    let col = `
    <div class="col col-${i}">col-${i}</div>`;

    grid1.innerHTML += col;
    console.log(i);
}

console.log(gridcol);