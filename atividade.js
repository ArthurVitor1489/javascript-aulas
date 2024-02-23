var bebida = "café"; // Escolha sua bebida! 

var valor;

switch (bebida) {
  case "café":
    valor = 2.50;
    console.log(`Você escolheu café. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
    break;
  case "leite":
    valor = 3.00;
    console.log(`Você escolheu leite. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
    break;
  case "chá":
    valor = 2.00;
    console.log(`Você escolheu chá. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
    break;
  default:
    console.log("Escolha inválida. Por favor, escolha entre café, leite ou chá.");
}


