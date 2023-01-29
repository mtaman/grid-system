let gridcol = 12;
let grid2Inner = ``;

let grid1 = document.getElementById('grid1');
let grid2 = document.getElementById('grid2');
let opgap = document.getElementById('op-gap');

opgap.addEventListener('change', addGap);

function addGap() {
    let vall = this.value;

    let el = grid2;
    for (let i = el.classList.length - 1; i >= 0; i--) {
        const className = el.classList[i];
        if (className.startsWith('gap')) {
            el.classList.remove(className);
        }
    }

    grid2.classList.add("gap" + vall);
}
grid1.innerHTML = `<h1>Grid System </h1>`;
for (let i = 1; i <= gridcol; i++) {
    let col = `
    <div class="col col-${i}">col-${i}</div>`;
    grid1.innerHTML += col;
}
grid2Inner += `
<div class="col col-s col-1">col-1</div>`.repeat(12);
grid2Inner += `
<div class="col col-s col-2">col-2</div>`.repeat(6);
grid2Inner += `
<div class="col col-s col-3">col-3</div>`.repeat(4);
grid2Inner += `
<div class="col col-s  col-4">col-4</div>`.repeat(3);
grid2Inner += `
<div class="col col-s  col-6">col-6</div>`.repeat(2);



grid2Inner += `
<div class="col col-5">col-5</div>
<div class="col col-7">col-7</div>`;
grid2Inner += `
<div class="col col-8">col-8</div>
<div class="col col-9">col-9</div>`;
grid2.innerHTML = grid2Inner;
