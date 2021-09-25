
function media(){
    valores=[20,36,15,2];
    maximo = Math.max(...valores);
    minimo = Math.min(...valores);
    
    Media= (minimo+maximo)/2;
    return Media;
}

console.log(media());
/*
var myArray = [1, 5, 6, 2, 3];
var m = Math.max(...myArray);
console.log(m)*/
