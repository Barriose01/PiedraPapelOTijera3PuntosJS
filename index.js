let txtRonda = document.getElementById("ronda");
let ronda = 0;
let ganador = document.getElementById("ganador");
let txtPuntosUsuario = document.getElementById("puntosUsuario");
let txtPuntosPC = document.getElementById("puntosPC");
let puntosUsuario = 0;
let puntosPC = 0;
let bloquePC = document.getElementById("bloquePC");
let bloqueUsuario = document.getElementById("bloqueUsuario");
let bloques = document.querySelectorAll("article");
let botones = document.querySelectorAll(".botones-accion");
let btnVolverJugar = document.getElementById("btnVolverJugar");

botones.forEach((boton) =>{
    boton.addEventListener("click",jugar);
});

btnVolverJugar.addEventListener("click",volverAJugar);

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

function darPuntuacion(opcionUsuario,opcionPC){
    let imagenUsuario = document.createElement("img");
    let imagenPC = document.createElement("img");
    switch(opcionUsuario){
        case "Piedra":
            imagenUsuario.src = "imagenes/piedra.jpg";
            if(opcionPC == "Papel"){
                imagenPC.src = "imagenes/papel.jpg";
                puntosPC +=1;
            }else if(opcionPC == "Tijera"){
                imagenPC.src = "imagenes/tijera.jpg";
                puntosUsuario += 1;
            }else{
                imagenPC.src = "imagenes/piedra.jpg";
            }
            break;
        case "Papel":
            imagenUsuario.src = "imagenes/papel.jpg";
            if(opcionPC == "Tijera"){
                imagenPC.src = "imagenes/tijera.jpg";
                puntosPC +=1;
            }else if(opcionPC == "Piedra"){
                imagenPC.src = "imagenes/piedra.jpg";
                puntosUsuario +=1;
            }else{
                imagenPC.src = "imagenes/papel.jpg";
            }
            break;
        case "Tijera":
            imagenUsuario.src = "imagenes/tijera.jpg";
            if(opcionPC == "Piedra"){
                imagenPC.src = "imagenes/piedra.jpg";
                puntosPC += 1;
            }else if(opcionPC == "Papel"){
                imagenPC.src = "imagenes/papel.jpg";
                puntosUsuario += 1;
            }else{
                imagenPC.src = "imagenes/tijera.jpg";
            }
            break;
    }
    verificarBloquesImagenes();
    bloquePC.append(imagenPC);
    bloqueUsuario.append(imagenUsuario);
    txtPuntosPC.textContent = "Puntos Maquina: " + puntosPC;
    txtPuntosUsuario.textContent = "Puntos Usuario: " + puntosUsuario;
    verificarGanador();
}

function verificarBloquesImagenes(){
    bloques.forEach((bloque) => {
        if(bloque.childElementCount > 1){
            bloque.removeChild(bloque.lastChild);
        }
    })
}

function verificarGanador(){
    if(puntosPC == 3 || puntosUsuario == 3){
        botones.forEach((boton) => {boton.disabled = true});
        if(puntosPC == 3){
            ganador.textContent = "La maquina ha ganado";
        }else if(puntosUsuario == 3){
            ganador.textContent = "El usuario ha ganado";
        }
    }
}

function volverAJugar(){
    botones.forEach((boton) => {boton.disabled = false});
    ganador.textContent = "";
    ronda = puntosPC = puntosUsuario = 0;
    txtRonda.textContent = "Ronda 0";
    txtPuntosPC.textContent = "Puntos Maquina: 0";
    txtPuntosUsuario.textContent = "Puntos Usuario: 0";
    verificarBloquesImagenes();
}

function jugar(){
    let opcionUsuario = this.textContent; //Obtiene el texto del boton presionado
    let opcionPC = generarOpcionPC();
    ronda += 1;
    txtRonda.textContent = "Ronda " +  ronda;
    darPuntuacion(opcionUsuario,opcionPC);
}

