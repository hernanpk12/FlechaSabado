/*Watto paga a su personal de ventas un salario
de 3500000 mensuales, más una comisión de 1500000 por
cada licencia de software vendida menos el 5% de
deducciones por impuestos. Codifica un programa que
calcule e imprima el salario mensual de un vendedor
dado; */

function wattoSalario(salario,licencia){
    comision = 1500000;
    deducciones = 0.5;

    if(licencia = true){
        total = (salario+comision)/deducciones;
        return total;
    }else{
        total = salario;
        return total;
    }
}
console.log(wattoSalario(3500000,true));
