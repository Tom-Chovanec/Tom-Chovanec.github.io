const colorButton = document.getElementById("colorButton");
const body = document.body;

function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getContrastColor(hex) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    return luminance < 0.5 ? "#FFFFFF" : "#000000";
}

colorButton.addEventListener("click", () => {
    const newBgColor = getRandomHexColor();
    const newTextColor = getContrastColor(newBgColor);

    body.style.backgroundColor = newBgColor;
    colorButton.style.color = newTextColor;
    colorButton.style.borderColor = newTextColor;
});
