function calcularIMC(peso, altura) {
    // Calculando o IMC usando a fórmula: peso / (altura * altura)
    var imc = peso / (altura * altura);
    return imc;
}

// Exemplo de uso da função:
var peso = 70; // em quilogramas
var altura = 1.75; // em metros

var imc = calcularIMC(peso, altura);
console.log("O IMC é: " + imc.toFixed(2)); // Arredondando o IMC para duas casas decimais


