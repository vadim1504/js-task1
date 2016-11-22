(function () {
    var str = "st0rin5g75"
    console.log(reverseString(str));
    console.log(isBegin(str,"st0r"));
    console.log(isBegin(str,"srt"));
    console.log(isEnd(str,"0rin5g75"));
    console.log(isEnd(str,"0ri"));
    console.log(isPascalCase("String_Case"));
})();

function reverseString(s) {
    var str = "";
    for(var i =s.length-1;i>=0;i--){
        str=str+s.charAt(i);
    }
    return str;
}

function isBegin(input,character){
    var s = input.substr(0,character.length);
    if(s==character)
        return true;
    else
        return false;
}
function isEnd(input,character){
    var s = input.substr(input.length-character.length,input.length);
    if(s==character)
        return true;
    else
        return false;
}

function isPascalCase(inputString) {
    return (inputString == inputString.toLowerCase() ||
        inputString.split(/[A-Z]/).length - 1 == inputString.split(/[_]/).length)
        && inputString.split(/[_]/).length >= 2
        && inputString.split(/[!,. ?-\d]/).length == 1;
}