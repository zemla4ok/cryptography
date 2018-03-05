//cesar

function cesarCrypt(text, key){
    text = text.toUpperCase();
    let rc = '';
    for(let i = 0; i < text.length; i++){
        let ind = (text.charCodeAt(i) - 65 + key) % 26 + 65;
        rc += String.fromCharCode(ind);
    }
    return rc;
}

console.log(cesarCrypt('abcdefgh', 1));
console.log('***************');

//vizhener

function vizhenerCrypt(text, key){
    text = text.toUpperCase();
    key = key.toUpperCase();
    let rc = '';

    while(text.length > key.length){
        key += key;
    }
    key = key.slice(0, text.length);

    for(let i = 0; i < text.length; i++){
        let ind = (text.charCodeAt(i) + key.charCodeAt(i) - 130) % 26 + 65;
        rc += String.fromCharCode(ind);
    }
    console.log(text);
    console.log(key);
    console.log(rc);
    return rc;
}

vizhenerCrypt('ATTACKATDAWN', 'LEMON');
console.log('***************');

//affinny

function affynnyCrypt(text){
    let a = 3;
    let b = 4;
    let m = 26;
    text = text.toUpperCase();
    let rc = '';
    for(let i = 0; i < text.length; i++){
        let ind = (((a * (text.charCodeAt(i) - 65)) + b) % m) + 65;
        rc += String.fromCharCode(ind);
    }
    return rc;
}

console.log(affynnyCrypt('ATTACKATDAWN'));