function fearNotLetter(str) {
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result;
    for(let i = alph.indexOf(str[0]), j = 0; j < str.length; j++, i++){
        if(str[j] !== alph[i]){
            result = alph[i];
            break;
        }
    }
    return result;
}