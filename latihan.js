// var data = 'X0X0XXX0XXOX0X0Xxoxoxxoox';
// var temp = []
// var count = 0;
// for (var i = 0; i < Math.sqrt(data.length); i++) {
//     temp.push([])
//     for (var j = 0; j < Math.sqrt(data.length); j++) {
//        temp[i].push(data[count])

//        count ++
//     }
  
// }

// console.log(temp)

// [ [ 'X', '0', 'X', '0', 'X' ],
//   [ 'X', 'X', '0', 'X', 'X' ],
//   [ 'O', 'X', '0', 'X', '0' ],
//   [ 'X', 'x', 'o', 'x', 'o' ],
//   [ 'x', 'x', 'o', 'o', 'x' ] ]
var data = 'X0X0XXX0XXOX0X0Xxoxoxxoox';
var temp = [];
var count = 0;
for (var i = 0; i < Math.sqrt(data.length); i++) {
    temp.push([])
    for (var j = 0; j < Math.sqrt(data.length); j++) {
        temp[i].push(data[count])
        count++;
    }
}
console.log(temp)