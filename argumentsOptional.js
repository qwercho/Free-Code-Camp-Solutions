function addTogether() {
    var checkNum = function (num) {
        if (typeof num !== 'number')
            return undefined;
        else
            return num;
    }

    if (arguments.length > 1) {
        var b = checkNum(arguments[0]);
        var c = checkNum(arguments[1]);
        if (b === undefined || c === undefined)
            return undefined;
        else
            return b + c;
    } else {
        var d = arguments[0];
        if (checkNum(d)) {
            return function (num) {
                if (d === undefined || checkNum(num) === undefined)
                    return undefined;
                else {
                    return d + num;
                }
            };
        }
    }

}

console.log(addTogether(2, 3));
//console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
//console.log(addTogether(2)([3]));