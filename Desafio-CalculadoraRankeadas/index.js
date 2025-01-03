let heroName = "Carlinhos";

function getCalculator(numeroVitorias, numeroDerrotas) {
    return numeroVitorias - numeroDerrotas
}

function getRanking(vitorias, derrotas) {
    resultado = getCalculator(vitorias, derrotas)
    switch (true) {
        case resultado <= 0:
            console.log("O Herói "+heroName+" não tem nenhuma Vitoria e está no nível de Ferro.")
            break
        case resultado > 0 && resultado <= 10:
            console.log("O Herói "+heroName+" tem o saldo de " + resultado + " Vitorias e está no nível Ferro")
            break
        case resultado > 10 && resultado <= 20:
            console.log("O Herói "+heroName+" tem o saldo de " + resultado + " Vitorias e está no nível Bronze")
            break
        case resultado > 20 && resultado <= 50:
            console.log("O Herói "+heroName+" tem o saldo de " + resultado + " Vitorias e está no nível Prata")
            break
        case resultado > 50 && resultado <= 80:
            console.log("O Herói "+heroName+" tem o saldo de " + resultado + " Vitorias e está no nível Ouro")
            break
        case resultado > 80 && resultado <= 90:
            console.log("O Herói "+heroName+" tem o saldo de " + resultado + " Vitorias e está no nível Diamante")
            break
        case resultado > 90 && resultado <= 100:
            console.log("O Herói "+heroName+" tem o saldo de " + resultado + " Vitorias e está no nível Lendário")
            break
        default:
            console.log("O Herói "+heroName+" tem o saldo de " + resultado + " Vitorias e está no nível Imortal")
            break
    }
}

getRanking(50,0)

