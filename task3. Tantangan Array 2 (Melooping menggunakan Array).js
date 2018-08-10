function dataHandling(param) {
    var string = ''
    for (i = 0; i < param.length; i++) {
        for (j = 0; j < param[i].length; j++) {
            switch(j) {
                case 0 :
                    string = 'Nomor ID: ' + param[i][j];
                    console.log(string);
                    break;
                case 1 :
                    string = 'Nama Lengkap: '+ param[i][j];
                    console.log(string);
                    break;
                case 2 :
                    string = 'TTL: '+ param[i][j] + ' ' +  param[i][j+1] ;
                    console.log(string);
                    break;
                case 3 :
                    break;
                case 4 :
                    string = 'Hobbi: ' + param[i][j]
                    console.log(string + '\n');
                    break;

            }
        }
            
    }
    
    
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

dataHandling(input)

