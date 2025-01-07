let userName = getFirstName("Amaral Silveira Cantos", " ")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Silveira-Cantos", "-")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}