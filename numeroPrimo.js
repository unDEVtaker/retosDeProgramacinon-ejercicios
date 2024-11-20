/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esNumeroPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function imprimirNumerosPrimos() {
  for (let i = 1; i <= 100; i++) {
    if (esNumeroPrimo(i)) {
      console.log(i);
    }
  }
}

imprimirNumerosPrimos();
