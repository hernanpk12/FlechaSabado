 
let sables=()=>{
    const array = [1, -2, -3, 4, -6];
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0)
        {
            suma ++;
        }
        
    }
    return (suma);
}
console.log(sables());
