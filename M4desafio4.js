// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log(`Olá, sejá bem vindo(a)!`)

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = prompt("Digite o seu nome: ")

console.log(`Olá ${nome}, sejá bem vindo(a)!`)

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nomeUsu = prompt("Digite o seu nome: ")

alert(`Olá ${nomeUsu}, seja bem vindo(a)!`)

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?")

console.log(`A sua linguagem preferida é ${linguagemPreferida}!`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

alert("Somadora")

let valor1 = prompt("Digite um número: ")
let valor2 = prompt("Digite outro número: ")
let resultado = valor1 + valor2

console.log(`A somatóra dos números ${valor1} e ${valor2} é: ${resultado}.`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

alert("Subtradora")

let valor3 = prompt("Digite um número: ")
let valor4 = prompt("Digite outro número: ")
let resultado2 = valor3 - valor4

console.log(`A somatóra dos números ${valor3} e ${valor4} é: ${resultado2}.`)

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let nomeUsuario = prompt("Digite o seu nome: ")
let idade = parseInt(prompt(`${nomeUsuario} digite a sua idade: `))

if (idade >= 18) {
    alert(`${nomeUsuario} você é maior de idade!`)
} else {
    alert(`${nomeUsuario} você não é maior de idade!`)
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let num = parseInt(prompt("Digite um número: "))

if (num > 0) {
    alert(`${num} é um número positivo!`)
} else if (num == 0) {
    alert(`${num} é zero!`)
} else {
    alert(`${num} é negativo!`)
}

// Use um loop while para imprimir os números de 1 a 10 no console.

let contadora = 1

while (contadora < 11) {
    console.log(contadora)

    contadora++
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nomeAluno = prompt("Digite o nome do aluno: ")
let nota = parseInt(prompt(`Digite a nota final do aluno ${nomeAluno}: `))

if (nota >= 7) {
    console.log(`${nomeAluno} está aprovado!`)
} else {
    console.log(`${nomeAluno} está reprovado!`)
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorio = console.log(parseInt(Math.random() * 100)) 

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroAleatorio2 = console.log(parseInt(Math.random() * 10)) 


// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numeroAleatorio3 = console.log(parseInt(Math.random() * 1000)) 