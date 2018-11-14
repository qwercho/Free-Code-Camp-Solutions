function spinalCase(str) {

    var splitArray = str.split(/(?=[A-Z])|\s|\_/);
    return splitArray.join("-").toLowerCase();
    
    return splitArray;
}
  
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
console.log(spinalCase('thisIsSpinalTap'));