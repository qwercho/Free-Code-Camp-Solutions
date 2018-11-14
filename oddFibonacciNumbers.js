function sumFibs(num) {
    let a = 1, b = 0, temp, total = 0;

    while(a <= num){
        temp = a;
        a = a + b;
        b = temp;
        if(b % 2 === 1)
            total += b;
    }
    return total;
}
  
console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));