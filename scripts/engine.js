function loadPage() {
    let input = document.getElementById("urlInput").value;
    let frame = document.getElementById("browserFrame");

    if (input.includes(".") && !input.includes(" ")) {
        if (!input.startsWith("http")) {
            input = "https://" + input;
        }
        frame.src = "https://strike.webstreamfonts.workers.dev/?url=" + encodeURIComponent(input);
    } else {
        frame.src = "https://caesiumwebview.pages.dev/apps/search_embedded#gsc.tab=0&gsc.q=" + encodeURIComponent(input) + "&gsc.sort=";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        loadPage();
    }
}