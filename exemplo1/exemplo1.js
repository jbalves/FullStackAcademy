console.log('fullstack academy')

// string
const name = 'Jeferson Barros'

// object (json)
const person = {
    firstName: 'Jeferson',
    lastName: 'Barros'
}
person.Firstname = 'Faria'

// integer
let count = 0
count++
console.log(count)

let vetor = [1,2,3]
vetor.push(1)
console.log(vetor)

if(count === 1){
    console.log('count eh igual a 1')
} else {
    
}

while(count <2){
    count++
}

for(let i=1; i<10; i++){
    console.log(i)
}

//functional
const latido = function(){
    console.log('auuuuuuu!');
}

const miado = function(){
    console.log('miauuuuu!');
}

//high order function
const gerarSom = function(qtd, tipo){
    for(let i=0;i < qtd; i++){
        tipo()
    }
}

gerarSom(3,miado);
gerarSom(2,latido)

//
const itens = [1,2,3,4]

//pure function
//const dobro = function(valor){
//    return valor*2
//}

//pure function
//const dobro = (valor) => {
//    return valor*2
//}

//pure function
const dobro = (valor) => valor*2

console.log(dobro(1)) //2
console.log(dobro(2)) //4

console.log('------map------')
const intens2 = itens.map(dobro)
console.log(intens2)

console.log('------filter------')
const somentePares = value => value%2===0

const pares = itens.filter(somentePares)
console.log('pares', pares)

//itens = [1,2,3,4]
const soma = (anterior, atual) => anterior+atual
const total = itens.reduce(soma, 0)
console.log('soma',total)

const pessoas = [
    {
        nome: 'Jeferson',
        idade: '31'
    },
    {
        nome: 'Barros',
        idade: '31'
    }
]
console.log(pessoas.map( pessoa => pessoa.nome))