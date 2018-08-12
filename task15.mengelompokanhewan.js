function groupAnimals(animals) {
  var arrayAnimals = [];
  var kamus = 'abcdefghijklmnopqrstuvwxyz';
  var temp=[];
  for (var i = 0; i < animals.length; i++) {
        arrayAnimals.push(animals[i][0])
     }
  
  for (var i = 0; i < kamus.length; i++) {
   //console.log(kamus[i])
   for (var j =0; j < animals.length; j++) {
    console.log(arrayAnimals[j])
   }
  }
  console.log(temp)
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]