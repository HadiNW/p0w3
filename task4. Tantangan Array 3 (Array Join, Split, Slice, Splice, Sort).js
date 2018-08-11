function dataHandling2(param) {
    param.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log (param);
    var arr = param[3].split('/');
    var bulan = Number(arr[1]);
    var tanggal = Number(arr[0]);
    var tahun = Number(arr[2]);

    switch (bulan) {
        case 1 : 
            bulan = 'Januari';
            break;
        case 2 : 
            bulan = 'Februari';
            break;
        case 3 : 
            bulan = 'Maret';
            break;
        case 4 : 
            bulan = 'April';
            break;
        case 5 : 
            bulan = 'Mei';
            break;
        case 6 : 
            bulan = 'Juni';
            break;
        case 7 : 
            bulan = 'Juli';
            break;
        case 8 : 
            bulan = 'Agustur';
            break;
        case 9 : 
            bulan = 'September';
            break;
        case 10 : 
            bulan = 'Oktober';
            break;
        case 11 : 
            bulan = 'November';
            break;
        case 12 : 
            bulan = 'Desember';
            break;
        default :
            bulan = 'Not A month';
            break;
    }
    console.log(bulan)
    arr.sort(function(value1, value2) { return value1 < value2 });
    console.log(arr); 
    console.log(arr.join('-'));
    console.log(param[1].slice(0,14))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
//Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"
