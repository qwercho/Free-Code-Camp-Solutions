function dropElements(arr, func) {
    for(let i = 0; i < arr.length; i++){
        if(!func(arr[i])){
            arr.splice(i, 1);
            i--;
        }
        if(func(arr[i]))
            break;
    }
    return arr;
}
  
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));