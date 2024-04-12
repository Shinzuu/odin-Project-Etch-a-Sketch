function setupGrid(gridSize) {
    document.addEventListener("DOMContentLoaded", function() {
        const container = document.getElementById("container");
        let opacityLevel = 0.9; // Initial opacity level

        // Create grid items dynamically
        function createGrid(gridSize) {
            container.innerHTML = ''; // Clear existing grid
            const gridSizePixels = 960 / gridSize; // Calculate size of each grid item
            for (let i = 0; i < gridSize * gridSize; i++) {
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");
                gridItem.style.width = `${gridSizePixels}px`; // Set width of each grid item
                gridItem.style.height = `${gridSizePixels}px`; // Set height of each grid item
                container.appendChild(gridItem);
            }
        }

        // Initial grid creation
        createGrid(gridSize);

        // Hover effect 
        container.addEventListener("mouseover", function(event) {
            if (event.target.classList.contains("grid-item")) {
                const buttonClicked = document.querySelector(".button-container button.clicked");
                if (buttonClicked) {
                    const effect = buttonClicked.id;
                    if (effect === "solid") {
                        event.target.style.backgroundColor = "black"; // Solid color
                    } else if (effect === "rainbow") {
                        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Random color
                        event.target.style.backgroundColor = randomColor;
                    } else if (effect === "gray-scale") {
                        if (event.target.style.backgroundColor.match(/rgba/)) {
                            let currentOpacity = Number(event.target.style.backgroundColor.slice(-4, -1));
                            if (currentOpacity <= 1) {
                                const newOpacity = Math.min(1, currentOpacity + 0.1); // Ensure opacity doesn't exceed 1
                                event.target.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
                            }
                        } else {
                            event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                        }
                    }                    
                }
            }
        });

        // Change grid size
        const selectionButtons = document.querySelectorAll(".button-container button");
        selectionButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                selectionButtons.forEach(btn => btn.classList.remove("clicked"));
                button.classList.add("clicked");
                if (button.id === "minimal") {
                    createGrid(16);
                } else if (button.id === "second") {
                    createGrid(64);
                } else if(button.id === "classic") {
                    createGrid(128);
                }
            });
        });
    });
}

// Initial grid creation
setupGrid(16);


document.addEventListener("DOMContentLoaded", function() {
    document.body.style.zoom = "80%";
});

document.addEventListener("DOMContentLoaded", function() {
    // Simulate button press
    const buttonToPress = document.getElementById("solid"); // Change "solid" to the ID of the button you want to simulate pressing
    buttonToPress.click(); // Trigger click event on the button
});
