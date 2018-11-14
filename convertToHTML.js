
function convertHTML(str) {

    if(str.includes('&')){
        str = str.replace('&','&amp;');
    }

    for(let i = 0; i < str.length; i++){
        switch(str[i]){
            case '<':
                str = str.replace('<','&lt;');
                break;
            case '>':
                str = str.replace('>','&gt;');
                break;
            case '\"':
                str = str.replace('\"','&quot;');
                break;
            case '\'':
                str = str.replace('\'','&apos;');
                break;
            default:
                break;
        }
    }
    return str;
}