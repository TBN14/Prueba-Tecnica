
const numeros = [14, 42 ,78, 50043, 7680, 2345];
function numeroMax(numeros) {
  let mayor = numeros[0];
  numeros.forEach(num => {
    if( num > mayor) {
      mayor = num;
    }
  });
  console.log(`Los numeros son: ${numeros}`);
  console.log(`El numero mayor es ${mayor}`);
}
numeroMax(numeros);