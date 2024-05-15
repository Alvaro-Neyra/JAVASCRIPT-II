let numero1 = Number(prompt("Ingresa el primer numero: "));
let numero2 = Number(prompt("Ingresa el segundo numero: "));


function dividir(numero1, numero2, validar) {
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    let noSePuede = validar(numero1, numero2);
    if (noSePuede == false) {
        alert(`Se puede dividir!, el resultado es: ${numero1 / numero2}`);
    }
}

function validarNumeros(numero1, numero2) {
    let noSePuedeDividir = false;
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Unos de los numeros ingresados no es un numero");
        noSePuedeDividir = true;
    } else if (numero2 === 0) {
        alert("El segundo numero ingresado no debe ser cero");
        noSePuedeDividir = true;
    }
    return noSePuedeDividir;
}

dividir(numero1, numero2, validarNumeros);