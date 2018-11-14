function translatePigLatin(str) {
    var cCluster = "";
    var front;

    if(!str.includes('a') && !str.includes('e') && !str.includes('i') && !str.includes('o') && !str.includes('u'))
        return str + "ay";

    for(let i = 0; i < str.length; i++){
        if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u'){
            cCluster += str[i];
        } else {
            front = i;
            break;
        }
    }

    if(cCluster === ""){
        return str + "way";
    }

    return str.slice(front, str.length) + cCluster + "ay";
}