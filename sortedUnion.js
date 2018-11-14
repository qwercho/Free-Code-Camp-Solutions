function uniteUnique(arr) {
    let noDups = [];

    for(let i = 0; i < arguments.length; i++){
        for(let j = 0; j < arguments[i].length; j++){
            noDups.push(arguments[i][j]);
        }
    }

    let uniqueArray = noDups.filter((item, pos)=>{
        return noDups.indexOf(item) == pos;
    })

    return uniqueArray;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));