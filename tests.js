function groupAnimals(animals) {
    var arrayAnimals = [];
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var temp=[];
    var result = [];
    
    for (var i = 0; i < kamus.length; i++) {      
     
        for (var j = 0; j < animals.length; j++) {  
          
         if (kamus[i] === animals[j][0]) {
          //temp.push([]);
          temp.push(animals[j]) 
          
         }           
        
        }

        if (temp.length !== 0) {
          //console.log(j,i)
          result.push(temp)
         
        }
        temp = []
        
       
       
    }
    
   return result
    
    
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]