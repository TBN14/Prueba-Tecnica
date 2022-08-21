function invertirNumero(num){
  return Number(num.toString().split('').reverse().join(''));
}

let numero = 767865;

console.log(`El numero es ${numero}`);
console.log(`El numero invertido es ${invertirNumero(numero)}`);