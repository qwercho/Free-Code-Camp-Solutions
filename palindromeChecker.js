function palindrome(str) {

    var cleanString = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    var cleanReversed = "";
    for(let i = cleanString.length - 1; i >= 0; i--){
        cleanReversed += cleanString[i];
    }

    return cleanString === cleanReversed ? true : false;
}



console.log(palindrome("eye"));
console.log(palindrome("2_A3*3#A2"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));