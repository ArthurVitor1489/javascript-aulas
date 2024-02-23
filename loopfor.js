var a = [10,20,30,40,50,60];

for (let valor of a){
    console.log(valor);

}


a.forEach (valor => console.log(valor));
var tot = 0;
a.forEach(valor => {
    tot += valor;
})

console.log(tot);


a.forEach(function(valor, indice, array){
    console.log(array[indice]);
})


var carro = [{ modelo: 'Audio A8', marca: 'Audi', ano: 2020},
]

for (let caracterisca in carro ){
    console.log(carro[caracterisca].marca);
}

for (let c of carro){
    console.log(c.ano)
}


var c = 1;

while (c <= 6){
    console.log(c);
    c++;
}

var t = 1


do {
    console.log(t);
    t++
}while (t < 5){



};

const person = { name: 'John', age: 30 };

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}

const carros = [

    { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },
  
    { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }
  
  ];
  
  for (let indice in carros) {
  
    console.log('Carro ' + (parseInt(indice) + 1) + ':');
  
    for (let atributo in carros[indice]) {
  
      console.log(atributo + ': ' + carros[indice][atributo]);
  
    }
  
    console.log('-----');
  
  }


  let i = 0;
  while (i < 5) {
      console.log(i);
      i++;
  }
  

  const numeros = [2, 4, 6, 8, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 === 0) {

    soma += numeros[i];

  }

}

console.log(soma);