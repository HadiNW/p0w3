function balikString (str) {
    var world = '';
    for (var i = str.length-1; i >= 0; i--) {       
        world += str[i]
    }
    return world;
}
console.log(balikString('hello world!'))