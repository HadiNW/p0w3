function pasanganTerbesar(num) {
  var angka = num.toString();
  var numArray = [];
  var angkaString = '';
  for (var i = 0; i < angka.length; i++) {   
     angkaString += angka[i]
     if (i % 2 !== 0 ) {
       numArray.push(angkaString)
       angkaString = ''
     } 
  }
  
  //console.log(numArray) 
  var done = false;
  while (done === false) {
    done = true;
    for (var i = 1; i < numArray.length; i += 1) {
      if (numArray[i - 1] > numArray[i]) {
        done = false;
        var tmp = numArray[i - 1];
        numArray[i - 1] = numArray[i];
        numArray[i] = tmp;
      }
    }
  }
  
  numArray = numArray[numArray.length-1]
  return Number(numArray);

}    
 // 0 1 2

//pasanganTerbesar(641573)
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99