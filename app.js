// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let amigos = [];
const alertaFaltaNombre = 'Por favor ingrese un nombre valido.';
const alertaNombreDuplicado = 'El nombre ya existe, Por favor ingrese un nombre valido.';

function agregarAmigo() {
    let nombre ="";
    nombre = document.getElementById('amigo').value;
    if (typeof nombre === "string" && nombre.length === 0) {
        alert(alertaFaltaNombre);
    }
    else if (nombre === null) {
        alert(alertaFaltaNombre);
    }
    else {
        if (existeNombre(nombre)){
            alert(alertaNombreDuplicado);
        }
        else{
            let nuevaLongitud = amigos.push(nombre);
            mostrarListaNombres();        
            limpiarAmigo();
        }
    }
    return;
}

function existeNombre(texto){
    let existe = false;
    for (var contador = 0; contador < amigos.length; contador++) {
        if (texto == amigos[contador]){
            existe = true;
            break;
        }
    }
    return existe;
}

function mostrarListaNombres(){
    LimpiaLista("listaAmigos");
    for (var contador = 0; contador < amigos.length; contador++) {
        asignarListaElemento("listaAmigos",`<li><a href="#">${amigos[contador]}</a></li>`);
    }
    return;
}

function LimpiaLista(elemento) {
    const lista = document.getElementById(elemento);
    lista.innerHTML = "";
    return;
}

function asignarListaElemento(elemento, texto) {
    const lista = document.getElementById(elemento);
    lista.innerHTML += texto;
    return;
}

function limpiarAmigo(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
let sorteo ;
    if (amigos.length == 0){
        alert(alertaFaltaNombre);}
    else{
        sorteo = seleccionarAmigo(amigos.length);
        morstrarAmigoSecreto(seleccionarAmigo(amigos.length));
    }
}

function seleccionarAmigo(max) {
    return Math.floor(Math.random() * max);
}

function morstrarAmigoSecreto(seleccionado){
    limpiarAmigo();
    LimpiaLista("listaAmigos");
    console.log(amigos[seleccionado]);
    asignarTextoElemento(".button-draw",amigos[seleccionado]);
}

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
    return;
}