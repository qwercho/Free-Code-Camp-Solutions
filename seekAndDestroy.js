function destroyer(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arguments.length; j++){
            if(arr[i] === arguments[j]){
                arr.splice(i, 1);
                j = 0;
            }
        }
    }
    return arr;
}
  
  //console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));