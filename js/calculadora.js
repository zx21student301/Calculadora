onload = iniciar

let n1;
let n2;

function iniciar(){
    n1 = document.getElementById("num1");
    n2 = document.getElementById("num2");
}

function sumar(){
    let res = n1 + n2;
    salida.innerHTML = "La suma de "+n1+" + "+n2+" = "+res;
}

function restar(){
    let res = n1 - n2;
    salida.innerHTML = "La resta de "+n1+" - "+n2+" = "+res;
}