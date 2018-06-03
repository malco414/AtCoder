function main(input) {
  var a =  input.split(" ")[0];
  var b =  input.split(" ")[1];

  if ( a * b % 2 ) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));