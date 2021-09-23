// 0.
function checkInt(a){
    return a % 1 === 0;
}

// 1.
//Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
function rgb(a,b,c){
    a = a ?? 0;
    b = b ?? 0;
    c = c ?? 0;

    console.log("rgb(" + a + "," + b + "," + c + ")");
}
console.log("#1");
rgb(7,undefined,null);

// 2.
// Создайте функцию имя_функции(число){}, которой на вход передается один параметр - целое число.
function divide(a){
    if(checkInt(a) === true) {
        console.log("Enter only integers");
        if (a % 3 === 0 && a % 5 === 0) {
            console.log("Number can be divided by 3 and 5");
        } else if (a % 3 === 0) {
            console.log("Number can be divided by 3");
        } else if (a % 5 === 0) {
            console.log("Number can be divided by 5");
        } else {
            console.log("Number cannot be divided be 3 nor by 5");
        }
    }
}
console.log("#2");
divide(25);

// 3.
//Создайте функцию корректировки помех. На вход приходит 3 числа: a, b, c. Числа могут быть только 0 или 1. Считаем что либо все числа переданы корректно, либо одно число могло быть передано с ошибкой. Функция возвращает правильное число.
function taskInterfer(a,b,c){
    let arr = [a,b,c];
    let count0, count1 = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            count0++
        } else
            count1++;
    }

    return count1 > count0 ? 1 : 0;


}
console.log("#3")
taskInterfer(1,0,1)

// 5.
// Создайте функцию, которая принимает в качестве параметров два целых числа (a и b) и выводит на экран все чётные числа из диапазона a...b.
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
// Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе.
function numAmount (a){
// let num = a.toString();
 let count = 0;
 for (let i = 0; i < a.toString().length; i++){
     count++;
 }
 console.log(count)
}

console.log("#6")
numAmount(6756478920) // EXR: 10

// 7.
// Создайте функцию, которая принимает в качестве параметра целое число и возвращает сумму его цифр.
function isIntegerCount(a){
    let arr = a.toString()
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        count += parseInt(arr[i]);
    }
    console.log(count);
}

console.log("#7");
isIntegerCount(12378);

// 8.
// Создайте функцию, которая принимает в качестве параметров коэффициенты квадратного уравнения (а, b и с) и возвращает количество корней этого уравнения.

// 9.
// Создайте функцию, которая принимает в качестве параметра целое число и возвращает значение true (истина), если число простое; иначе функция возвращает значение false (ложь).
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
console.log("#9")
primeNumber(11);

// 10.
// Создайте функцию, которая принимает в качестве параметров координаты x и y точки и возвращает одно из значений 1, 2, 3 или 4 – в зависимости от того, в какой четверти системы координат находится точка. В случае, если точка находится на, как минимум, одной из осей координат, функция возвращает -1.
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

console.log("#10")
point(1, -1)

// 11.
// Создайте функцию, которая принимает в качестве параметров координаты центра и радиус окружности, а также координаты некоторой точки.
function circle(centerX, centerY, radius, pointX, pointY) {
    let rightMaxDistanceX, leftMaxDistanceX = 0;
    let upMaxDistanceY, downMaxDistanceY = 0;
    
    rightMaxDistanceX = centerX + radius;
    leftMaxDistanceX = centerX - radius;

    upMaxDistanceY = centerY + radius;
    downMaxDistanceY = centerY - radius;

        pointX < leftMaxDistanceX || pointX > rightMaxDistanceX || pointY > upMaxDistanceY || pointY < downMaxDistanceY
            ? console.log("Point is out of the circle")
            : console.log("Point is in the circle");

}

console.log("#11")
circle(3,1,2,1 , -2);
