'use strict';

function BinarioADecimal(num) {
   var suma = 0 
   var exponente = num.length -1

   for(let i=0; i < num.lenght; i++){
      suma = suma + num[i] * Math.pow(2,exponente);
      exponente--;
   }
   return suma 
}

function DecimalABinario(num) {
   var resultado=""

   while(num>0){
      resultado = (num%2) + resultado;
      num = Math.floor(num / 2)
   }
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
