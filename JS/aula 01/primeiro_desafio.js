
//DESAFIO://
//Faça um programa para calcular o valor de uma viagem.
//Você terá 3 variáveis. Sendo elas:
 //1 - Preço do combustível- R$ 5,25
 //2 - Gasto médio de combustível do carro por KM;
 //3 - Distância em KM da viagem;
//Imprima no console o valor que será gasto para realizar esta viagem.//
//resposta"//

//console.log('olá');

const precoCombustivel = 5.25;
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

