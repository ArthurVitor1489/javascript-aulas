const arrayOriginal = [1, 'a', 2, 'b', 3, 'c'];

// Utilizando a função 'map' para duplicar números e transformar strings em letras maiúsculas
const novoArray = arrayOriginal.map(elemento => {
    if (typeof elemento === 'number') {
        return elemento * 2; // Duplica números
    } else if (typeof elemento === 'string') {
        return elemento.toUpperCase(); // Transforma strings em letras maiúsculas
    } else {
        return elemento; // Mantém outros tipos sem alteração
    }
});

console.log("Novo Array:", novoArray);

// Utilizando a função 'filter' para criar um array contendo somente os números
const numerosArray = arrayOriginal.filter(elemento => typeof elemento === 'number');

console.log("Array somente com números:", numerosArray);

// Utilizando a função 'reduce' para somar todos os números do array original
const somaDosNumeros = arrayOriginal.reduce((acumulador, elemento) => {
    if (typeof elemento === 'number') {
        return acumulador + elemento;
    } else {
        return acumulador;
    }
}, 0);

console.log("Soma de todos os números:", somaDosNumeros);
