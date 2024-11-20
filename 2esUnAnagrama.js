/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function esUnAngrama(palabra1, palabra2) {
  if (palabra1.length !== palabra2.length) return false;
  return palabra1.split("").sort().join("") === palabra2.split("").sort().join("");
}

console.log(esUnAngrama("roma", "amor")); // true
console.log(esUnAngrama("roma", "mora")); // true
console.log(esUnAngrama("roma", "rama")); // false