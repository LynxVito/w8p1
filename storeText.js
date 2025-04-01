document.getElementById("text-area").addEventListener("input", function (event) {
    sessionStorage.setItem("Wizard", event.target.value);
});