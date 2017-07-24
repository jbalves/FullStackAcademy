//Exercício 1
const produtos = [
    {
        nome: 'Bicicleta',
        preco: 1200.0
    },
    {
        nome: 'Capacete',
        preco: 450.0
    }
]

const precoProdutos = produtos.map(produtos => produtos.preco)
const somaValores = precoProdutos.reduce((anterior, atual) => anterior+atual, 0)
console.log(somaValores)