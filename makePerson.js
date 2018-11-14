var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    var full = firstAndLast;
    var name = firstAndLast.split(" ");
    
    this.getFullName = function () {
        return full;
    };

    this.getLastName = function() {
        return name[1];
    }

    this.getFirstName = function(){
        return name[0];
    }

    this.setFirstName = function(first){
        name[0] = first; 
        full = name.join(" ");
    }

    this.setLastName = function(last){
        name[1] = last;
        full = name.join(" ");
    }

    this.setFullName = function(firstAndLast){
        full = firstAndLast;
        name = full.split(" ")
    }
};

var bob = new Person('Bob Ross');