var pais = "Brasil";

if(pais != "Brasil"){
    console.log ("Voce é estrangeiro");

}else{
    console.log("Voçê é brasileio");
}

var idade = 223;

if(idade <16){
    console.log("Não vota")
}else if (idade < 18 || idade >65){
    console.log("Voto opicional")
}else{
    console.log("Voto obrigatório")
}


//switch é god demais!

var diaSem = 4;

switch(diaSem){
    case 1: 
        console.log("Domingo");
        break;
    case 2: 
        console.log("Segunda");
        break;
    case 3: 
        console.log("Terça");
        break;
    default:
        console.log("Esse dia da semana não existe!")
}


let x = 7;

let resultado = "" ;

if (x >10){
    resultado = "A";
} else if (x <5){
    resultado = "B";

}else {
    resultado = "C";
}

console.log(resultado)

let totalCompra = 150;
let desconto = " ";


if (totalCompra > 200 ){
    desconto = "20%";

} else if (totalCompra >100){
    desconto = "10%";
}
else if (totalCompra > 50) {
    desconto = "5%";
}


console.log(desconto)

