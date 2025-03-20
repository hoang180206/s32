
const button = document.getElementById("changeColorBtn");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() *12)];
    }
    return color;
}

button.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});
