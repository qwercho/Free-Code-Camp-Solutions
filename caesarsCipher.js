function rot13(str) { // LBH QVQ VG!
    var cipheredString = "";
    var asciiValues = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/))
            asciiValues.push(str.charCodeAt(i));
        else
            asciiValues.push(str[i]);
    }
    for (let i = 0; i < asciiValues.length; i++) {
        if (typeof asciiValues[i] === 'number') {
            if ((asciiValues[i] + 13) > 90) {
                asciiValues[i] = asciiValues[i] + 13 - 90 + 64;
                cipheredString += String.fromCharCode(asciiValues[i]);
            } else {
                asciiValues[i] = asciiValues[i] + 13;
                cipheredString += String.fromCharCode(asciiValues[i]);
            }
        } else {
            cipheredString += asciiValues[i];
        }
    }
    return cipheredString;
}