document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const gridSize = 16; // Change this to adjust the grid size

    // Create grid items dynamically
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
});
