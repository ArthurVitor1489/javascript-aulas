var valores = [ 8, 7 ,6, 5, 3];

console.log (valores[1]);

console.log ("Array invertido: " + valores.reverse());

for (var pos = 0 ; pos < valores.length; pos ++ ){
    console.log (" posição: " + pos +  " valor: " + valores[pos]);
}

var carro = [];

carro [0] = " volvo ";
carro [1] = " jeep ";

var motos = new Array ( " bmw", " yamara", "honda");

var soma = 0 
for  (var pos = 0 ; pos < valores.length; pos++){
    soma += valores [pos];
}

var media = soma/valores.length;

console.log(media);

var arry1 = [1, 2, 3, 4, 5, 6,]

console.log(arry1.join (' | '));


var retirado = arry1.shift();

console.log(retirado);

console.log(arry1); 

console.log (" possção numero 3: " + arry1.indexOf(3));

arry1.push(7);

console.log(arry1);

arry1.pop();

console.log(arry1);


var arry2 = [ -1, -5, -6, -7,- 2, 9, 84];

console.log(retirado);

console.log(arry2);

console.log ("posição numero 2: " + arry2.indexOf(1,2,3,4,5));



// novo 

var arry3 = [1,2,3,4,5,6,7,8 ];

arry3.splice(0,5);

console.log(arry3);


var nomes = ["Maria","João","Pedro","Arthur"];

var novos = nomes.splice(0,2, "Luiz", "felipe");

console.log(nomes);


var pais = ["Brasil","Argentina","Franca"];

pais.unshift("uruguai");

console.log(pais);

//


var pessoa = ["Eduardo", "Rosa ", "Maria","Aldo"];
var gerente = ["Davi", "Manu"];

var pessoas1 = pessoa.slice(0,4);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);

console.log(empresa);

const mesesDoAno = [
    ['Janeiro', 'Fevereiro', 'Março'],
    ['Abril', 'Maio', 'Junho'],
    ['Julho', 'Agosto', 'Setembro'],
    ['Outubro', 'Novembro', 'Dezembro']
  ];
  
  console.log('Trimestre 1:', mesesDoAno[0]);
  console.log('Trimestre 2:', mesesDoAno[1]);
  console.log('Trimestre 3:', mesesDoAno[2]);
  console.log('Trimestre 4:', mesesDoAno[3]);


