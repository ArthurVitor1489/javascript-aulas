let bebida = prompt("Escolha a bebida: café, leite ou chá").toLowerCase(); 

let valor;

switch (bebida) {
  case 'café':
    valor = 2.50;
    alert(`Você escolheu café. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
    break;
  case 'leite':
    valor = 3.00;
    alert(`Você escolheu leite. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
    break;
  case 'chá':
    valor = 2.00;
    alert(`Você escolheu chá. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
    break;
  default:
    alert('Escolha inválida. Por favor, selecione entre café, leite ou chá.');
}