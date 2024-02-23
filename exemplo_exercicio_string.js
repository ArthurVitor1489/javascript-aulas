var url = "https://br.tradingview.com/chart/1vnbgQSo/?symbol=BITSTAMP%3ABTCUSD";
const parametros = url.split("?")[1]
console.log (parametros)
const valores = parametros.split("=");


for(let i = 0; i <valores.length; i++){
    if(valores[i].startsWith("BITSTAMP=")){
        valor[i]= "BITSTAMP=" + valores[i].substring(7).toUpperCase();
    }
}

console.log(valores)

