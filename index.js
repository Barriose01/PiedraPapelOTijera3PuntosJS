let txtRonda = document.getElementById("ronda");
let ronda = 0;
let pc = document.getElementById("pc");
let usuario = document.getElementById("usuario");
let ganador = document.getElementById("ganador");
let botones = document.querySelectorAll("input");
let txtPuntosUsuario = document.getElementById("puntosUsuario");
let txtPuntosPC = document.getElementById("puntosPC");
let puntosUsuario = 0;
let puntosPC = 0;
let botonJugar = document.getElementById("btnJugada");
let botonEmpezar = document.getElementById("btnComenzar");

botonJugar.addEventListener("click",jugar);
botonEmpezar.addEventListener("click",volverAJugar);

function generarOpcionPC(){
    let opcionPC = Math.floor(Math.random() * 3) + 1;
    let opcionString = "";
    switch(opcionPC){
        case 1:
            opcionString = "Piedra";
            break;
        case 2:
            opcionString = "Papel";
            break;
        case 3:
            opcionString = "Tijera";
            break;
    }
    return opcionString;
}

function generarOpcionUsuario(){
    let opcionUsuario = "";
    botones.forEach((boton) =>{
        if(boton.checked){
            opcionUsuario = boton.value;
        }
    })
    return opcionUsuario;
}

function darPuntuacion(opcionUsuario,opcionPC){
    switch(opcionUsuario){
        case "Piedra":
            if(opcionPC == "Papel"){
                puntosPC +=1;
            }else if(opcionPC == "Tijera"){
                puntosUsuario += 1;
            }
            break;
        case "Papel":
            if(opcionPC == "Tijera"){
                puntosPC +=1;
            }else if(opcionPC == "Piedra"){
                puntosUsuario +=1;
            }
            break;
        case "Tijera":
            if(opcionPC == "Piedra"){
                puntosPC += 1;
            }else if(opcionPC == "Papel"){
                puntosUsuario += 1;
            }
            break;
    }
    txtPuntosPC.textContent = "Puntos Maquina: " + puntosPC;
    txtPuntosUsuario.textContent = "Puntos Usuario: " + puntosUsuario;
    verificarGanador();
}

function verificarGanador(){
    if(puntosPC == 3 || puntosUsuario == 3){
        botonJugar.disabled = true;

        if(puntosPC == 3){
            ganador.textContent = "La maquina ha ganado";
        }else if(puntosUsuario == 3){
            ganador.textContent = "El usuario ha ganado";
        }
    }
}

function volverAJugar(){
    botonJugar.disabled = false;
    ganador.textContent = "";
    ronda = puntosPC = puntosUsuario = 0;
    txtRonda.textContent = "Ronda 0";
    txtPuntosPC.textContent = "Puntos Maquina: 0";
    txtPuntosUsuario.textContent = "Puntos Usuario: 0";
    pc.textContent = "Maquina:";
    usuario.textContent = "Usuario:";
    botones.forEach((boton) => boton.checked = false);
}

function jugar(){
    let opcionUsuario = generarOpcionUsuario();
    let opcionPC = generarOpcionPC();
    if(opcionUsuario == ""){
        alert("Debe seleccionar una opcion para poder jugar");
    }else{
        ronda += 1;
        txtRonda.textContent = "Ronda " +  ronda;
        pc.textContent = "Maquina: " + opcionPC;
        usuario.textContent = "Usuario: " + opcionUsuario;
        darPuntuacion(opcionUsuario,opcionPC);
    }
}

