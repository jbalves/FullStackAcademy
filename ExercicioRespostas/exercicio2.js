//Dado o seguinte vetor e utilizando somente map, reduce e filter.
const produtos = [
    {
        id: 1,
        preco: 10.0,
        qtd: 2
    },
    {
        id: 2,
        preco: 10.0,
        qtd: 2
    },
    {
        id: 3,
        preco: 10.0,
        qtd: 2
    },
    {
        id: 4,
        preco: 10.0,
        qtd: 0
    }
]

//2a) Gere um novo vetor com a lista de produtos cuja a quantidade seja maior que 0
const produtosMaiorQueZero = produtos.filter(produtos => produtos.qtd > 0)
console.log('lista de produtos cuja a quantidade seja maior que 0:\n',produtosMaiorQueZero)

//2b) Gere um novo vetor somente com o id do produto e o sub-total (preco x qtd)
const vetorSubtotal = produtos.filter(produtos => produtos.qtd > 0).map(function(produtos){
    return {
        id: produtos.id,
        subtotal: produtos.preco*produtos.qtd
    }
})
console.log('Novo vetor somente com o id do produto e o sub-total:\n',vetorSubtotal)

//2c) Gere o somatório dos sub-totais
const somatorio = vetorSubtotal.map(vetorSubtotal => vetorSubtotal.subtotal).reduce((anterior, atual) => anterior+atual, 0)
console.log('Somatório dos sub-totais:\n', somatorio)