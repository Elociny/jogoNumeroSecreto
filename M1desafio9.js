// modulo 1 | desafio 9 

alert("Boas vindas ao nosso site!")

let nome = "Lua"
let idade = 25
let numeroVendas = 50
let saldoDisponivel = 1000

alert("Erro! Preencha todos os campos.")

let mensagemErro = "Erro! Preencha todos os campos."

alert(mensagemErro)

nome = prompt("Digite o seu nome: ")
idade = parseInt(prompt("Digite a sua idade: "))

if (idade >= 18) {
    alert(nome + ", você pode tirar a habilitação!")
} else {
    alert(nome + ", você não pode tirar a habilitação!")
}