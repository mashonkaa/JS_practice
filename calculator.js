let input = window.prompt("Enter values to calculate");

let firstInput = [];
let secondInput = [];

let symbols = ["+", "-", "*", "/"];
let symbolValue;
let symbolNum;

for(let i = 0; i < input.length; i++){
    for(let j = 0; j < symbols.length; j++)
        if (input.includes(symbols[j])){
            symbolNum = input.indexOf(symbols[j]);
            symbolValue = symbols[j];
        }
}

let ifMatchesF, ifMatchesS = Boolean();
//let ifMatchesS = Boolean();
let letter = /^[A-Za-z]+$/;

function fNumCheck() {
    for (let i = 0; i < symbolNum; i++) {
        if (input[i].match(letter)) {
            ifMatchesF = true;
        } else{
            firstInput.push(input[i]);
            ifMatchesF = false;
        }

    }
    return ifMatchesF;
}
function sNumCheck () {
    for (let i = symbolNum + 1; i < input.length; i++) {
        if (input[i].match(letter)) {
            ifMatchesS = true;
        } else{
            secondInput.push(input[i]);
            ifMatchesS = false;
        }
    }
    return ifMatchesS;
}

fNumCheck();
sNumCheck();


let firstToInt = parseFloat(firstInput.join(''));
let secondToInt = parseFloat(secondInput.join(''));



function calc(symbolValue, fNum, sNum){
    let res;

     if(ifMatchesF === true || ifMatchesS === true) {
        alert("No string values allowed");
        return 0;
    }
    else if(isNaN(firstToInt) || isNaN(secondToInt)) {
        alert("Enter values correctly");
        return 0;
    }
    else if(symbolValue==="+")
        res = fNum+sNum;
    else if( symbolValue==="-")
        res=fNum-sNum;
    else if(symbolValue==="*")
        res=fNum*sNum;
    else if(symbolValue=="/" && !sNum == "0")
        return alert("cannot divide by 0");
    else if(symbolValue==="/")
        res=fNum/sNum;
    return alert(res);

}

// function ifContinue(symbolValue, fNum, sNum){
//     let input = window.prompt("If you want to continue enter 'ok'");
//     if (input=='ok')
//         calc(symbolValue, firstToInt, secondToInt);
//     else
//         return 0;
// }

calc(symbolValue, firstToInt, secondToInt);