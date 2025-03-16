// Function, well, loads the desired page in the iFrame...
function loadPage() {
    let input = document.getElementById("urlInput").value;
    let frame = document.getElementById("browserFrame");

    // Determins whether the text in the input is meant to be a query or a URL.
    if (input.includes(".") && !input.includes(" ")) {
        if (!input.startsWith("http")) {
            input = "https://" + input;
        }
        
        // This is our WebViewer engine, which is a CORS proxy so many websites can load.
        frame.src = "https://webviewer.ourjupitergroup.workers.dev/?src=" + encodeURIComponent(input);
    } else {
        // Other queries load in a CSE.
        frame.src = "https://barclaygo.pages.dev/results?q=" + encodeURIComponent(input) + "#gsc.tab=0&gsc.q=" +encodeURIComponent(input) + "&gsc.page=1";
    }
}

// Lets the user press "enter" instead of clicking the button.
function handleKeyPress(event) {
    if (event.key === "Enter") {
        loadPage();
    }
}
