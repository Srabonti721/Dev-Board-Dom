const now = new Date();
const formattedDate = now.toDateString()
document.getElementById("date").innerText = formattedDate;

function time() {
    const time = new Date();
    const formattedTime = time.toLocaleTimeString();
    return formattedTime;
}