function myReplace(str, before, after) {
    var strArray = str.split(" ");
    var word;
    var location;
  
    for(let i = 0; i < strArray.length; i++){
      if(strArray[i] === before){
        location = i;
        if(strArray[i][0] === strArray[i][0].toUpperCase()){
          after = after[0].toUpperCase() + after.slice(1, after.length);
        }
      }
    }
  
    strArray[location] = after;
    return strArray.join(" ");
  }