const container = document.getElementById('container');

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }
}