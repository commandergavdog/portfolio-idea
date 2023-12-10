// Select all draggable elements
var draggableElements = document.querySelectorAll(".draggable");

// Apply dragElement function to each
draggableElements.forEach(dragElement);


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Select the header within the element
    var header = elmnt.querySelector(".header");
    // console.log(header);

    if (header) {
        // if present, the header is where you move the DIV from:
        header.onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Updated to subtract the differences
        var transX = (parseInt(elmnt.dataset.transX) || 0) - pos1;
        var transY = (parseInt(elmnt.dataset.transY) || 0) - pos2;
        elmnt.style.transform = `translate(${transX}px, ${transY}px)`;

        // Store the current translation to persist it after drag
        elmnt.dataset.transX = transX;
        elmnt.dataset.transY = transY;
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}




const gameLauncher = document.getElementById("game-launcher");

function runGame() {
    const primaryContainer = document.getElementById("primary-container");
    const iframeContainer = document.getElementById("iframe-container");
    const exitButton = document.getElementById("exit");

    const iframe = document.getElementById("jsdos");

    gameLauncher.onclick = function(){        
        primaryContainer.classList.add('display-none');

        iframeContainer.classList.remove('display-none');
        document.getElementById("jsdos").focus();
        iframe.focus();
        
        console.log(document.getElementById("jsdos").focus());

    }

    exitButton.onclick = function() {
        primaryContainer.classList.remove('display-none');
        iframeContainer.classList.add('display-none');
    }
}

gameLauncher.addEventListener("click", runGame);


