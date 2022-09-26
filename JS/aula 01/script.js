
//console.log("hello world!");// 
// primeiro abrir terminal dar CTRL + ALT +  N: rodar o comando no termonal com o NodeJS//
// teclado LOGI: start (alt)
//console.log('imprimir algo');//
//imprime: console.log//

// variaveis: espaços para armazenar valores//
//let var= 10;//
//const pi -3,14;//

// const: nao da p/ mudar o valor
//let: pode mudar os valores//



//let variavel = 10 / 10;

//console.log(variavel);

//DESAFIO://
//Faça um programa para calcular o valor de uma viagem.
//Você terá 3 variáveis. Sendo elas:
 //1 - Preço do combustível- R$ 5,25
 //2 - Gasto médio de combustível do carro por KM;
 //3 - Distância em KM da viagem;
//Imprima no console o valor que será gasto para realizar esta viagem.//
//resposta"//

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));