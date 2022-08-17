/*function pode_subir(altura, acompanhada){
    if ((altura >= 1.40  && altura < 2 ) || ((altura < 1.40 && altura > 1.20) && acompanhada == "Sim")){
        return true
    }else if (altura <= 1.20){
        return false
    } else {
        return false
    }
}


//console.log( pode_subir (1.50, "Sim")) */


function pode_subir (altura, acompanhada){
    if (altura >= 1.40  && altura < 2 ) {
        return console.log("Entrada Autorizada")
    }else if ((altura < 1.40 && altura > 1.20) && acompanhada == "Sim"){
        return console.log("Entrada autorizada apenas com acompanhante")
    }else {
        return console.log("Entrada não autorizada")
    }
}

pode_subir(1.9, "Não")


