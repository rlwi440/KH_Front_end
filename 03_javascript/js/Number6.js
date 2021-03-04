/**
 * JavaScript에서의 Hoisting : 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미한다. 즉, 변수가 함수 내에서 정의되었을 경우, 
 * 선언부분만 함수의 최상위로, 함수 바깥에서 정의되었을 경우, 전역 컨텍스트의 최상위로 변경이 된다
 */
var a; //var 키워드로 선언된 변수는 hoistng된다
console.log(a); //undefined
a = "안녕";

//function foo ; 함수선언식 hoisting된다
//var bar  var 키워드로 선언된 변수 hoisting  된다.
foo();
/**
 *함수 선언식은 hoisting된다 
 */
function foo() {
    console.log("foo");
}
//bar(); //Number6.js:18 Uncaught TypeError: bar is not a function
/**
 * 함수 표현식 
 * bar 변수에 익명함수를 대입 
 */
var bar = function () {
    console.log("bar");
}
//예제 방법 
var a = 1;

function a() {
    console.log('123');
}

console.log(a);


var b = 3;

function b() {
    console.log('124');
}
console.log(b);