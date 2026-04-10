document.getElementById("clear-history-btn").addEventListener("click", function () {
    const addListContainer = document.getElementById("add-list");
    while (addListContainer.hasChildNodes()) {
        addListContainer.removeChild(addListContainer.firstChild);
    }
})
