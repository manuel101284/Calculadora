function cambiarModo(){
    let bodyWeb = document.body;
    bodyWeb.classList.toggle("oscuro");
}

// Opcion 1 (SE DEBE AGREGAR LA FUNCIONALIDAD ONCLICK EN EL HTML)

// function setResult(value) {
//     document.getElementById('result').innerHTML = value;
// }
// function getResult() {
//     return(document.getElementById('result').innerHTML);
// }
// function add(key) { 
//     var result = getResult();
//     if (result!='0' || isNaN(key)){
//         setResult(result + key);
//     }
//     else{
//         setResult(key);
//     }
// }
// function calc() {
//     var result = eval(getResult());
//     setResult(result);
//     console.log("El resultado va acá");
// }
// function del() { 
//     setResult(0);
// }



// Opcion 2
var operandoa;
var operandob;
var resultado;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('boton_ac');
    var borrar = document.getElementById('boton_borrar');
    var suma = document.getElementById('boton_suma');
    var resta = document.getElementById('boton_resta');
    var multiplicacion = document.getElementById('boton_multiplicacion');
    var division = document.getElementById('boton_division');
    var porcentaje = document.getElementById('boton_porcentaje');
    var potencia = document.getElementById('boton_potencia');
    var igual = document.getElementById('boton_igual');
    var uno = document.getElementById('boton_1');
    var dos = document.getElementById('boton_2');
    var tres = document.getElementById('boton_3');
    var cuatro = document.getElementById('boton_4');
    var cinco = document.getElementById('boton_5');
    var seis = document.getElementById('boton_6');
    var siete = document.getElementById('boton_7');
    var ocho = document.getElementById('boton_8');
    var nueve = document.getElementById('boton_9');
    var cero = document.getElementById('boton_0');
    var punto = document.getElementById('boton_punto');

    //Eventos de click
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent  + ".";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    potencia.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "**";
        limpiar();
    }
    porcentaje.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "%";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

    function limpiar(){
        resultado.textContent = "";
    }
    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    function resolver(){
        var res = 0;
        switch(operacion){
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
            case "**":
                res = parseFloat(operandoa) ** parseFloat(operandob);
                break;
            case "%":
                res = parseFloat(operandoa) * parseFloat(operandob) * 0.01;
                break;
        }
        resetear();
        resultado.textContent = res;
        document.getElementById('resultado') = res;
        console.log(res);
    }
}

