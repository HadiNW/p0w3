function angkaPalindrome(num) {  
  var angka = num.toString();
  var panjangAngka = angka.length;
  var temp = [];

  if (panjangAngka === 1) {
   // return num + 1;
   console.log(num+1)
  } else {
    for (var i = panjangAngka-1; i >= 0; i--) {
      temp.push(angka[i])
    }
    temp = temp.join('')
    temp = Number(temp);
    console.log(num,temp)

    while (num != temp) {
      
    }

   
     
  }
}
angkaPalindrome(18)
//angkaPalindrome(10)
// TEST CASES
// console.log(angkaPalindrome(8)); // 9
 //console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001