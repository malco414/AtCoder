function Main(input) {
  input = input.split("\n");
  var arrayBC = input[1].split(" ");
  var a = Number(input[0]);
  var b = Number(arrayBC[0]);
  var c = Number(arrayBC[1]);
  var s = input[2];

  console.log(a+b+c+' '+s);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));