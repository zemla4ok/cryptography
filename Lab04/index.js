//3, 1, 4, 1, 5 
function crypt(text){
    let arr = [];
    text = text.split(' ').join('');
    let i = 0;
    while(i*5 < text.length){
        if(i > text.length){
            arr[i] = text.slice(i*5, text.length);
        }
        arr[i] = text.slice(i*5, i*5 + 5);
        i++;
    }
    let rc = '';
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i][1])
            rc += arr[i][1];
        if(arr[i][3])
            rc += arr[i][3];
        if(arr[i][0])
            rc += arr[i][0];
        if(arr[i][2])
            rc += arr[i][2];
        if(arr[i][4])
            rc += arr[i][4];
    }
    return rc;
}

console.log(crypt('пример маршрутной перестановки'));