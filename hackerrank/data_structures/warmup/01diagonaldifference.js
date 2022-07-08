/*
https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=false
*/

function processData(input) {
    var rightDia = 0;
    var leftDia = 0;
    var inputArray = input.split("\n");
    var squareSize = parseInt(inputArray.shift() - 1);
    for (var i = 0; i < inputArray.length; i++) {
        var row = inputArray[i].split(" ");
        rightDia += parseInt(row[i]);
        leftDia += parseInt(row[squareSize]);
        squareSize--;
    }
    console.log(Math.abs(rightDia - leftDia));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
