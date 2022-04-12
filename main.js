let numero;
let mayor = 0;
let posicion = 0;
let posicionMayor = 0;
let salir = "ESC";
let cantidad = prompt("Ingrese cantidad de numeros a ingresar");

do {
  let numero = prompt(
    "Ingrese numeros (Intentos disponibles : " + cantidad + ")"
  );
  if (numero > mayor) {
    mayor = numero;
    posicionMayor = posicion;
  }
  cantidad--;
  posicion++;
} while (cantidad > 0);

if (posicionMayor != 0) {
  prompt(
    "El mayor numero fue " + mayor + " " + "en la posicion " + posicionMayor
  );
} else {
  prompt("Datos invalidos");
}
