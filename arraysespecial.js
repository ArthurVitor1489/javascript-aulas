var numeros = [ 1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);

console.log(resultado)


var numeroFiltrados = numeros.filter(
    function (valor){
        return valor > 5;s
    }
);

console.log(numeroFiltrados);


function buscarValores ( valor ) {
    return valor <6;
}

var numerosEncontrados = numeros.filter (buscarValores);
console.log(numerosEncontrados);


var r1 =numeros.filter((valor) => {
    return valor >5;

});

console.log(r1);

var r2 = numeros.filter(valor => valor > 3);

var funcionario = [
    { nome: "Luiz", idade: 54},
    { nome: "Arthur", idade: 27},
    { nome: "Vitor", idade: 32},
    { nome: "Joicy", idade: 15},
]

var pessoaListagem = funcionario.filter(
    function(valor){
        return valor.nome.length < 8

    })

console.log(pessoaListagem)


var produtos = [
    { id: 1, descrição: "SmarthPhone", categoria: "Eletronicos"},
    { id: 1, descrição: "Nootbook", categoria: "Eletronicos"},
    { id: 1, descrição: "Geladeira", categoria: "Eletrodomesticos"},
    { id: 1, descrição: "Fogão", categoria: "Eletrodomesticos"},
    { id: 1, descrição: "Sofa", categoria: "Moveis"},
    
]

var produtos = [
    { id: 1, descrição: "SmarthPhone", categoria: "Eletronicos"},
    { id: 2, descrição: "Nootbook", categoria: "Eletronicos"},
    { id: 3, descrição: "Geladeira", categoria: "Eletrodomesticos"},
    { id: 4, descrição: "Fogão", categoria: "Eletrodomesticos"},
    { id: 5, descrição: "Sofa", categoria: "Moveis"},
];

var eletrodomesticos = produtos.filter(produto => produto.categoria === "Eletrodomesticos");
console.log(eletrodomesticos);

