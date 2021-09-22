// 0.
// function checkInt(a){
//     return a % 1 === 0;
//
// }

// 1.
function rgb(a,b,c){
    a = a ?? 0;
    b = b ?? 0;
    c = c ?? 0;

    console.log("rgb(" + a + "," + b + "," + c + ")");
}
console.log("#1");
rgb(7,undefined,null);

// 2.
function divide(a){
    if(!(a % 1 === 0)){
        console.log("Enter only integers");
    }
    else if (a % 3 === 0 && a % 5 === 0){
        console.log("Number can be divided by 3 and 5");
    }
    else if (a % 3 === 0){
        console.log("Number can be divided by 3");
    }
    else if (a % 5 === 0) {
        console.log("Number can be divided by 5");
    }
    else{
        console.log("Number cannot be divided be 3 nor by 5");
    }
}
console.log("#2");
divide(25);

// 3.
function taskInterfer(a,b,c){

}

// 5.
function evenRange(a,b){
    let arr = [];
    if(!(a % 1 === 0)){
        console.log("Enter only integers");
    }
    for(let i = a; i < b; i++){
        if(i%2 === 0){
            arr.push(i)
        }
    }
    console.log(arr)
}

console.log("#5")
evenRange(2,58)

// 6.
function numAmount (a){
// let num = a.toString();
 let count = 0;
 for (let i = 0; i < a.toString().length; i++){
     count ++;
 }
 console.log(count)
}

console.log("#6")
numAmount(6756478920) // EXR: 10

// 7.


// 8.
function primeNumber(a){
    let isPrime = true;
    if (a > 2){
        for (let i = 2; i < a; i++){
            if(a % i === 0)
                isPrime = false;
        }
    }
console.log(isPrime);
}
console.log("#8")
primeNumber(11);

// 9.
function point(x,y){
    let quarter = 0;
    if(x > 0 && y > 0){
        quarter = 1
    } else if (x < 0 && y > 0){
        quarter = 2;
    } else if (x < 0 && y < 0){
        quarter = 3;
    } else if (x > 0 && y < 0){
        quarter = 4;
    } else {
        console.log("one of axes is 0")
        return -1;

    }
    console.log(quarter);
}

console.log("#9")
point(1, -1)

// 10.

function circle(centerX, centerY, radius,){
    let maxDistanceX = 0;
    let maxDistanceY = 0;

    if(centerX >= 0){
        maxDistanceX = centerX+radius;
    } else if(centerX < 0){
        maxDistanceX = -radius+centerX;
    }
    console.log(maxDistanceX);
}

console.log("#10")
circle(1,1,2)
