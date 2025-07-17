function calcularPartidas(vitorias, derrotas){

    // calcular saldo de vitórias
    let saldo = vitorias - derrotas
    let nivel = ""

    if(vitorias < 10 ){
        nivel = "Ferro"
    }else if(vitorias>=11 && vitorias<=20){
        nivel = "Bronze"
    }else if(vitorias>=21 && vitorias<=50){
        nivel = "Prata"
    }else if(vitorias>=51 && vitorias<=80){
        nivel = "Ouro"
    }else if(vitorias>=81 && vitorias<=90){
        nivel = "Diamante"
    }else if(vitorias>=11 && vitorias<=100){
        nivel = "Lendario"
    }else if(vitorias>=101){
        nivel = "Imortal"
    }
    return `O Heroi tem saldo de ${saldo} e está no nível de ${nivel}`
}
console.log(calcularPartidas(85, 5))
console.log(calcularPartidas(45,12))  
