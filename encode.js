function encode(str){
    var code = "";
    for (let i = 0; i < str.length; i ++){
        if (str[i] == str[i+1]){
            let j = i + 1;
            while (str[j] == str[i]){
                j++;
            }
            let dupes = j - i;
            code += str[i];
            code += dupes;
            i = j - 1;
        }
        else {
            code += str[i];
        }
    }
    return code;
}

function decode(str){
    var raw = "";
    for (let i = 0; i < str.length; i++){
        if (parseInt(str[i]) > 1) {
            let reps = parseInt(str[i]);
            for ( let j = 0; j < reps-1; j++) {
                raw += str[i-1];
            }
        }
        else {
            raw += str[i];
        }
    }
    return raw;
}

console.log(encode("hello"));
console.log(decode("hel2o"))
console.log(parseInt("h"));