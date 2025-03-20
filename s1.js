// Lấy phần tử button
const button = document.getElementById("changeColorBtn");

// Hàm tạo màu ngẫu nhiên
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() *12)];
    }
    return color;
}

// Bắt sự kiện click để đổi màu nền
button.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});
