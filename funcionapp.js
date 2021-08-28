function calcularDistancia (CoordenadaX1,CoordenadaX2,Coordenaday1,Coordenaday2){
    return(`la distancia del planeta  yavin4 a naboo es de:  ${Math.sqrt(Math.pow(CoordenadaX2-CoordenadaX1,2)+Math.pow(Coordenaday2-Coordenaday1,2))}`);
}

console.log(calcularDistancia(0,50,0,70));
console.log(calcularDistancia(0,20,0,30));
