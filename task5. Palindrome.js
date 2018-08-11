function palindrome(kata='saya') {
  var temp = [];
  for(var i = kata.length-1; i >=0; i--){
    temp.push(kata[i]);
  }
  temp = temp.join('');
  //console.log(temp)
  if (kata === temp) {
    return true;
  } else {
    return false;
  }
}
  

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false