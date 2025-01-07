let nomeHeroi = "Deadpool"
let xpHeroi = 5000

switch(true){
    case xpHeroi <= 1000:
        console.log("\nO Herói de nome '"+nomeHeroi+"' está no nível de Ferro!\n")
        break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        console.log("\nO Herói de nome '"+nomeHeroi+"' está no nível de Bronze!\n")
        break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        console.log("\nO Herói de nome '"+nomeHeroi+"' está no nível de Prata!\n")
        break;
    case xpHeroi >= 5001 && xpHeroi <= 7000:
        console.log("\nO Herói de nome '"+nomeHeroi+"' está no nível de Ouro!\n")
        break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
        console.log("\nO Herói de nome '"+nomeHeroi+"' está no nível de Platina!\n")
        break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        console.log("\nO Herói de nome '"+nomeHeroi+"' está no nível de Imortal!\n")
        break;
    default:
        console.log("\nO Herói de nome '"+nomeHeroi+"' está no nível de Radiante!\n")
        break;
}