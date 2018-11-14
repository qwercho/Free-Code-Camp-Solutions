const {performance} = require('perf_hooks');

function sumPrimes(num) {
    let total = 0;
    function isPrime(num){
        for(let i = 2; i < num; i++){
            if(num % i === 0) 
                return false;
        }
        return num !== 1 && num !== 0;
    }
    for(let i = 2; i <= num; i++){
        if(isPrime(i))
            total += i;
    }
    return total;
}

var t0 = performance.now();
console.log(sumPrimes(10));
var t1 = performance.now();
console.log(t1-t0);
