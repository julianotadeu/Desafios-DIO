class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    attack() {
        let ataque
        switch (true) {
            case this.tipo === "Mago":
                ataque = "magia"
                break
            case this.tipo === "Guerreiro":
                ataque = "espada"
                break
            case this.tipo === "Monge":
                ataque = "artes marciais"
                break
            case this.tipo === "Ninja":
                ataque = "shuriken"
                break
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let marvelHero = new Hero("Deadpool", 37, "Ninja")
marvelHero.attack()

let dcHero = new Hero("Warlord", 59, "Guerreiro")
dcHero.attack()

let disneyHero = new Hero("Gelado", 40, "Mago")
disneyHero.attack()