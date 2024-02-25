var calcula = function(numero){
    return numero* 2
};

var x = calcula(4) // x retorna o valor 8

const mensagem = (nome) => {
    console.log(`Olá, ${nome}`);
};

mensagem("Marcelo");


function multilicar (x , y){
    return x *y 

}
    
var a = multilicar (4,2);
console.log(a)


var b = multilicar (6,7)
console.log (b)

//

function somaValores(a,b = 2 ,c = 6){
    var total = a + b + c
    return total 
}

var f = somaValores(8, 4, 5);
console.log(f)

// função anonima


var inforCal = function( a, b, c){
    return a + b + c
}


console.log(inforCal(2,5,7))

const soma = (num1, num2) => {
    return num1 + num2
}


// arrowfunciton

console.log(soma(3,6))

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num)
console.log (valores)


var ListaProdutos = [" geladeira","fogão", "air fryer"];
var listaEmMaiuscula = ListaProdutos.map (primeiraEmMaiuscula);


function primeiraEmMaiuscula (elemento){
    return elemento.charAt(0).toUpperCase () + elemento.slice(1)
};


funciton compare 


