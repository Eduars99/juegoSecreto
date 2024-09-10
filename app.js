
//aqui asignamos a la variable una funcion que es la que retorna un numero del 1 al 10
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//con el console log podemos verificar
console.log(numeroSecreto)

//aqui hacemos una funcion donde capturamos el input
//Usamos el document.getElementbyID
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //el triple igual sirve para evaluar si son iguales tanto como en el valor y el tipo de dato
    if (numeroDeUsuario === numeroSecreto){
        asingarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asingarTextoElemento('p',"El numero secreto es menor");
        } else {
            asingarTextoElemento('p',"El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//funcion para limpiar el textbox que hay ahi
function limpiarCaja(){
    //Aqui tratamos de obtener el ID de una forma distinta y capturar el valor
    //QuerySelector es un selector general y usamos el # para obtener el ID
    document.querySelector('#valorUsuario').value = '';
    
}


//Con esta funcion lo que hacemos es hacerla generica y que la funcion reciba parametros
function asingarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

//return significa que nos va a retornar el valor
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   if (listaNumerosSorteados.length == numeroMaximo){
    asingarTextoElemento('p', 'Ya se sortearon los numeros posibles');

   }else{
    //Si el numero generado esta incluido en la lista

    //aqui incluimos los numeros generados en el array, si es cierto
    if (listaNumerosSorteados.includes(numeroGenerado)){
        //llamamamos a la funcino numero secreto otra vez para que se repita
        return generarNumeroSecreto();
    } else {
        //sino es cierto, hacemos push del numero 
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   }
    
}

function condicionesIniciales() {
    asingarTextoElemento("h1", "Juego del numero secreto!");
    asingarTextoElemento("p", `Dime un numero del 1 al ${numeroMaximo}]`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
    
    
}

condicionesIniciales();
