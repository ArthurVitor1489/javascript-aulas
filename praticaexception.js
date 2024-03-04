function divisão(a,b){
    if(a === b){
        throw new ("Divisão por zero não é permitida")
    }
    return a/b
}

try{

const resultado = divisão (10,0);\
console.log("resultado: =")
}catch(erro)