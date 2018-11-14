function steamrollArray(arr) {
    let empty = {};
    let flat = arr.toString().split(",");
    for(let i = 0; i < flat.length; i++){
        if(flat[i] === ""){
            flat.splice(i , 1);
            i--;
        }
        if(flat[i] === '[object Object]'){
            flat[i] = empty;
        }
        if(!isNaN(parseInt(flat[i]))){
            flat[i] = parseInt(flat[i]);
        }
    }
    return flat;
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));