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

function decode(expr) {
    let str = '';
    let arr = [];
    let j = 0;
    let res = '';
    for (let i = 0; i <= expr.length; i++) {
        if (i % 10 == 0 && i != 0) {
            arr[j] = str;
            j += 1;
            str = '';
        }
        if (expr[i] == '0' && expr[i+1] == '0'){
            i += 1;
        } else if (expr[i] == '1' && expr[i + 1] == '0') {
            str += '.';
            i += 1;
        } else if (expr[i] == '1' && expr[i + 1] == '1') {
            str += '-';
            i += 1;
        } else if (expr [i] == '*') {
            str += ' ';
            i += 9;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let key in MORSE_TABLE) {
            if (arr[i] == key) {
                res += MORSE_TABLE[key];
            }
        }
        if (arr[i] == ' ') {
            res += ' ';
        }
    }
    const result = res;
    console.log (result);
    return result
}

module.exports = {
    decode
}
