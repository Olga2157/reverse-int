module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
    }
    let digitArray = String(n).split("")
    let reverseDigitArray = digitArray.reverse();
    let reversedString = reverseDigitArray.join("");
    return Number(reversedString);
}