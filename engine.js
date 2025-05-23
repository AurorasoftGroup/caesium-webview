function loadPage() {
    let input = document.getElementById("urlInput").value;
    let frame = document.getElementById("browserFrame");

    if (input.includes(".") && !input.includes(" ")) {
        if (!input.startsWith("http")) {
            input = "https://" + input;
        }
        frame.src = "https://corsproxy.ourjupitergroup.workers.dev/?url=" + encodeURIComponent(input);
    } else {
        frame.src = "https://barclaywebtech.pages.dev/search#gsc.tab=0&gsc.q=" + encodeURIComponent(input) + "&gsc.sort=";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        loadPage();
    }
}