// atividade proposta em aula

// alert("Seja bem vindo(a) para o jogo do número secreto!")
/*

let numeroUsuario = prompt("Escolha um número de 1 e 30")

// console.log("teste1")

let numeroSecreto = 18

if (numeroSecreto == numeroUsuario) {
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}.`)
} else {
    alert("Infelizmente você errou o número secreto.")

    alert("DICA!")

    // console.log("teste2")

    if (numeroSecreto > numeroUsuario) {
        alert(`O número secreto é maior que ${numeroUsuario}.`)
    } else {
        alert(`O número secreto é menor que ${numeroUsuario}.`)
    }
}

// console.log("teste3")

*/

// Laço de repetição enquanto

let numeroMaximo = 5500
let numeroUsuario
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let tentativas = 1

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`Escolha um número de 1 e ${numeroMaximo}`)

    if (numeroSecreto == numeroUsuario) {
        break
    } else {
        alert("Infelizmente você errou o número secreto.")
    
        alert("DICA!")
    
        // console.log("teste2")
    
        if (numeroSecreto > numeroUsuario) {
            alert(`O número secreto é maior que ${numeroUsuario}.`)
        } else {
            alert(`O número secreto é menor que ${numeroUsuario}.`)
        }
        // tentativas = tentativas +1
        tentativas++
    }
}

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"

alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com o total de ${tentativas} ${palavraTentativas}.`)


/*
if (tentativas > 1) {
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com o total de ${tentativas} tentativas.`)
} else {
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com o total de ${tentativas} tentativa.`)
}
*/