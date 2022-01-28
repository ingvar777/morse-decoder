const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function zeroMorse(prop) {

    let morse = [];

    for (let i = 0; i < prop.length; i = i + 2) {
        switch (prop.substring(i, i + 2)) {
            case "10":
                morse.push(".");
                break;
            case "11":
                morse.push("-");
                break;
            default:
                break;
        }
    }

    return MORSE_TABLE[morse.join("")]
}



function decode(expr) {
    if (expr.length % 10) return -1

    let text = "";
    let charZero = "";

    for (let i = 0; i < expr.length; i = i + 10) {

        charZero = expr.substring(i, i + 10);
        text = text + ((charZero !== "**********") ? zeroMorse(charZero) : " ");
    }

    return text
}

module.exports = {
    decode
}
