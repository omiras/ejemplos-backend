function generateHexColor() {
    const makingColorCode = '0123456789ABCDEF';
    let finalCode = '#';
    for (let counter = 0; counter < 6; counter++) {
        finalCode += makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomRGB() {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const WHITE_COLOR = "#FFFFFF";

module.exports.generateHexColor = generateHexColor;
module.exports.generateRandomRGB = generateRandomRGB;

module.exports.WHITE_COLOR = WHITE_COLOR;