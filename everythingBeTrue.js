function truthCheck(collection, pre) {
    for(let i = 0; i < collection.length; i++){
        console.log(collection[i][pre]);
        if(!collection[i].hasOwnProperty(pre)){
            return false;
        }
        if(collection[i][pre] === 0 || collection[i][pre] === "" || collection[i][pre] === undefined || collection[i][pre] === null){
            return false;
        }
        if(collection[i][pre] !== collection[i][pre]){
            return false;
        }
    }
    return true;
}