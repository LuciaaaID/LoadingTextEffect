// index.js

document.addEventListener("DOMContentLoaded", function() {
    const loadingText = document.createElement("h1");
    loadingText.textContent = "Loading...";
    document.body.appendChild(loadingText);

    const loadingInterval = setInterval(function() {
        if (loadingText.textContent === "Loading...") {
            loadingText.textContent = "Loading";
        } else {
            loadingText.textContent += ".";
        }
    }, 500);

    // Simulate long loading process
    setTimeout(function() {
        clearInterval(loadingInterval);
        document.body.removeChild(loadingText);
        // Replace with your actual content once loaded
        const content = document.createElement("p");
        content.textContent = "Your content is loaded!";
        document.body.appendChild(content);
    }, 5000); // Adjust the duration as needed
});
