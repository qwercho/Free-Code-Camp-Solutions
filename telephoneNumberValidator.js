function telephoneCheck(str) {

    
    return (/^(1|1\s)?\s?(\(\d{3}\)|\d{3})(\s|\-)?\d{3}(\s|\-)?\d{4}$/).test(str);
}
  
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(275)76227382"));