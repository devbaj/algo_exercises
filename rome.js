//create a function that converts an integer to roman numerals

function gloryToRome(x){
    var rome = [];
    var hund = Math.trunc(x/100);
    var tens = Math.trunc((x%100)/10);
    var ones = Math.trunc(((x%100)%10)/1);
    for(var i=1;i<=hund;i++){
        rome.push("C");
    }
    while(tens > 0){
        if(tens==9){
            rome.push("X");
            rome.push("C");
            tens = 0;
        }
        else if(tens >= 5){
            rome.push("L");
            tens -= 5;
        }
        else if(tens == 4){
            rome.push("X");
            rome.push("L");
            tens = 0;
        }
        else{
            rome.push("X");
            tens--;
        }
    }
    while(ones > 0){
        if(ones==9){
            rome.push("I");
            rome.push("X");
            ones = 0;
        }
        else if(ones >= 5){
            rome.push("V");
            ones -= 5;
        }
        else if(ones == 4){
            rome.push("I");
            rome.push("V");
            ones = 0;
        }
        else{
            rome.push("I");
            ones--;
        }
    }
    return rome.join("");
}