// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

alert("Contadora")

let numero = 1

while (numero < 11) {
    alert(numero)

    numero++
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

alert("Decrementadora")

let usuNumero = 10

while (usuNumero >= 0) {
    alert(usuNumero)

    usuNumero--
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

alert("Contagem regressiva!")

let regressao = parseInt(prompt("Digite um número: "))

while (regressao >= 0) {
    alert(regressao)

    regressao--
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

alert("Contagem progressiva!")

let progressao = parseInt(prompt("Digite um número: "))
let num = 0

while (num <= progressao) {
    alert(num)

    num++
}