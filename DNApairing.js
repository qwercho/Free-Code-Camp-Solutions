function pairElement(str) {
    let result = [];
    let temp = [];
    
    for(let i = 0; i < str.length; i++){
        temp = [];
        switch(str[i]){
            case 'A':
                temp.push('A', 'T');
                break;
            case 'T':
                temp.push('T', 'A');
                break;
            case 'G':
                temp.push('G', 'C');
                break;
            case 'C':
                temp.push('C', 'G');
                break;
            default:
                break;
        }
        result.push(temp);
    }
    return result;
}