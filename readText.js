const getFromStorage = sessionStorage.getItem("Wizard");

if(getFromStorage !== null) {
    const displayText = document.getElementById("display");
    displayText.innerText = getFromStorage;
}