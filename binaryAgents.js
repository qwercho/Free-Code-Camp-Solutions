function binaryAgent(str) {
    let binaryArr = str.split(" ");
    let stringArr = [];
  
    for(let i = 0; i < binaryArr.length; i++){
      stringArr.push(String.fromCharCode(parseInt(binaryArr[i], 2).toString(10)));
    }
  
    return stringArr.join("");
  }