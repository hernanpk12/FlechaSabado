/*function suma(a,b){
    return a+b;
}*/
/*let suma=(a,b)=>(a+b);

let operar = suma(3,5);
console.log("la suma es "+operar); */

function functionNumeros(numero){
    let  negativo=0; // Inicializar todas la variables
    var array_masMenos=[]; //también el array
        for (var i=0; i<numero.length; i++){
            if (numero[i] < 0)
            {
                negativo++;
            }
        }
    
        /* fuera del bucle */
    /*
        array_masMenos [0] = positivo/numero.length;
        array_masMenos [1] = nulo/numero.length;
        array_masMenos [2] = negativo/numero.length;
        return array_masMenos;
    }*/


    const array = [1, -2, -3, 4];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0)
        {
            sum += array[i];
        }
        
    }
    console.log(sum);