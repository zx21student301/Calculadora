onload = iniciar

let n1;
let n2;

function iniciar(){
    n1 = document.getElementById("num1");
    n2 = document.getElementById("num2");
}

function sumar(){
    let res = n1 + n2;
    salida.innerHTML = "La suma de "+n1+" + "+n2+" = "+res + "(editado por feature2)";

}

function dividir(){
    let res = n1 / n2;
    salida.innerHTML = "La división de "+n1+" / "+n2+" = "+res;
}
function restar(){
    let res = n1 - n2;
    salida.innerHTML = "La resta de "+n1+" - "+n2+" = "+res;
}

function multiplicar(){
    let res = n1 * n2;
    salida.innerHTML = "La multiplicación de "+n1+" * "+n2+" = "+res;
}
function dividir(){
    let res = n1 / n2;
    salida.innerHTML = "La división de "+n1+" / "+n2+" = "+res;
}