var number = 1333;
var count = 0;

while (number != 1) {
  number = collatz(number);
}

console.log("FIN en " + count + " pasos");

function collatz(number) {
  if (number % 2 == 0) {
    //es par
    console.log(number + " /2 = " + (number = number / 2));
  } else {
    //es impar
    console.log("(" + number + " x 3) + 1 = " + (number = number * 3 + 1));
  }
  count++;
  return number;
}
