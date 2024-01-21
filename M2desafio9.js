// Modulo 2 | desafio 9

/* Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!". */

let diaSemana = prompt("Digite um dia da semana: ")

if (diaSemana == "Sábado" ||
    diaSemana == "sábado" ||
    diaSemana == "sabado" ||
    diaSemana == "Sabado" ||
    diaSemana == "Domingo" ||
    diaSemana == "domingo") {
    alert("Bom fim de semana!")
} else {
    alert("Boa semana!")
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

alert("Olá, este programa vai identificar se o número é positivo ou negativo.")

let numero = parseInt(prompt("Digite um número: "))

if (numero >= 0) {
    alert(`O número ${numero} é positivo!`)
} else {
    alert(`O número ${numero} é negativo!`)
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

alert("Olá, este é um sistema de pontuação! \n \nSe a sua pontuação for 100 ou maior você vence ;)")

let pontuacao = parseInt(prompt("Digite a sua pontuação: "))

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!")
} else {
    alert("Infelizmente você perdeu, tente novamente para ganhar.")
}


// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

alert("Este é um sistema de saldo da conta")

let nome = prompt("Digite o seu nome: ")
let saldo = parseFloat(prompt("Digite o seu saldo: "))

alert(`Olá ${nome}, seu saldo é de R$ ${saldo}. `)

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeUsuario = prompt("Digite o seu nome: ")

alert(`Sejá bem vindo(a), ${nomeUsuario}!`)