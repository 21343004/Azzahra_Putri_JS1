let operator = "+";
let angka1 = 5;
let angka2 = 3;
let hasil;

switch (operator) {
  case "+":
    hasil = angka1 + angka2;
    console.log(`Hasil ${angka1} + ${angka2} adalah ${hasil}`);
    break;
  case "-":
    hasil = angka1 - angka2;
    console.log(`Hasil ${angka1} - ${angka2} adalah ${hasil}`);
    break;
  case "*":
    hasil = angka1 * angka2;
    console.log(`Hasil ${angka1} * ${angka2} adalah ${hasil}`);
    break;
  case "/":
    hasil = angka1 / angka2;
    console.log(`Hasil ${angka1} / ${angka2} adalah ${hasil}`);
    break;
  default:
    console.log("Operator tidak valid.");
}

