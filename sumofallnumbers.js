function sumAll(arr) {
    let result = arr.sort((a,b)=>{
        return a > b;
    });
    let total = 0;
    for(let i = result[0]; i <= result[result.length - 1]; i++){
        total += i;
    }
    return total;
}
  
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));