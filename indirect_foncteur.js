function multiplie(a,b){
    
    return a*b;
}
multiplieur = function(a){
    return function(b) {return multiplie(a)

    }
}

console.log(multiplieur(b))

