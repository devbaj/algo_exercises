function validPython(str){
    var nest = 0;
    var check = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] == "("){
            check.push(str[i]);
        }
        else if(str[i] == "["){
            check.push(str[i]);
        }
        else if(str[i] == "{"){
            check.push(str[i]);
        }
        else if(str[i] == '"'){
            check.push(str[i]);
        }

        if(str[i] == ")" ){
            if(check[check.length-1] != "(" ){
                return false;
            }
            else{
                check.pop();
            }
        }
        if(str[i] == "]" ){
            if(check[check.length-1] != "[" ){
                return false;
            }
            else{
                check.pop();
            }
        }
        if(str[i] == "}" ){
            if(check[check.length-1] != "{" ){
                return false;
            }
            else{
                check.pop();
            }
        }
        if(str[i] == '"' ){
            if(check[check.length-1] != '"' ){
                return false;
            }
            else{
                check.pop();
            }
        }

        if(str[i] == ":"){
            nest += 4;
            for(var j = 0; j < nest; j++){
                if(str[i+(j+1)] != " "){
                    return false;
                }
            }
        }
    }
    if(check.length == 0){
        return true;
    }
    else{
        return false;
    }
}