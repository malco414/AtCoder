function main(input) {
  var array = input.split('');
  var answer = Number(array[0]) + Number(array[1]) + Number(array[2]);
  console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));