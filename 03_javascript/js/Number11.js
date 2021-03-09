/**
 * 함수선언식
 */
function foo() {

}

/**
 * 함수 표현식
 * funcion() ->익명함수 
 */
var bar = function far() {

};
bar();
//far(); Number11.js:16 Uncaught ReferenceError: far is not defined

/**
 * 즉시 실행함수 Immediately Function Expression IIFE
 */
(function () {
    console.log("hello iife!");

})();
(function () {
    console.log("bye life");
}());

(function (name) {
    console.log("안녕~ " + name);
}('철수'));

(function (names) {
    console.log("안녕~" + names)
}('나는 배기원이야'));
/**
 * 매개변수 parameter 함수선언부의 매개인자가 담길공간(변수)
 * 매개인자 argument 함수 호출부 
 */

//매개변수 parameter 함수선언부의 매개인자가 담길공간(변수)
function test1(x) {
    //매개인자 argument 함수 호출부 
    console.log("x=" + x);
    //매개인자 유사배열 arguments 참조 
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++)
        console.log(arguments[i]);
}
/**
 * 매개인자의 합을출력하는 가산기 함수 add를 작성 
 */
function test2() {
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    add(12.34, 45.67);
    add('a', 'b', 'c', 'd');
}

function add() {
    // isNaN  Not-a-Number String
    var sum = isNaN(arguments[0]) ? "" : 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
/**
 * 함수의 return 구문이 없다면 undefined 를 리턴.
 */

function test3() {
    var k = koo();
    console.log(k); //undefined 
}

function koo() {
    return 100;
}
/**
 * a^2 +b^2=c^2
 * 밑변 높이 빗변 
 */
function test4(a, b) {
    function power(n) {
        return n ** 2;
        //** check
    }
    //제곱근 구하기
    c = Math.sqrt(power(a) + power(b));
    console.log(c); //11.180339887498949 
}
/**
 * 자바스크립트에서 함수는 값으로 취급한다.
 * 변수에 대입(함수표현식)할수있고,
 * 함수의 인자로 전달되거나 
 * 리턴값으로 사용될수있다.
 * 
 */
/**
 * 자바스크립트에서 함수는 값으로 취급된다.
 * - 변수에 대입(함수표현식)할수 있고, 
 * - 함수의 인자로 전달되거나(콜백함수), 
 * - 리턴값으로 사용될 수 있다.
 */
function test5() {
    var f = function (n) {
        /**
         * 배열요소의 인덱스는 0에서 부터 전체요소의 개수보다 1
         *  작은(n-1) 범위까지이다.
         * 0보다작은(n-1) 범위 .
         */
        console.log(n + ": hello, " + names[n - 1] + "!");
    };
    //exec 정규표현식과 문자열 을 찾아서 배열 을 리턴 
    exec(f);
}
var names = [
    'html', 'css', 'js', 'jquery', 'java',
    'oracle', 'mybatis', 'maven', 'lombok', 'spring'
];
/**
 * 1: hello, html!
 * 2: hello, css!
 * 3: hello, js!
 * 4: hello, jquery!
 * 5: hello, java!
 * ...
 * 10: hello, spring!
 */
function exec(a) {
    // console.log(a);
    // console.log(typeof a);
    for (var i = 0; i < 10; i++)
        a(i + 1);
}

function test6() {
    // var f = makeFunction();
    // // console.log(f, typeof f);
    // f('js'); // 'hello js~'

    //(makeFunction()('js'));

    var sayHello = makeFunction('say');
    var sayGoodbye = makeFunction('good bye');

    sayHello('js');
    sayGoodbye('js');
}

function makeFunction(say) {
    return function (name) {
        console.log(say + ' ' + name + '~');
    };
}

function soo() {
    return function (n) {
        alert(n);
    }
}

//1
var z = 50;
(function varTest() {
    var z = 55;
    z += 45;
    console.log('varTest() : z=', z); //100 전역변수 
}());
console.log('z=', z); //50
//2
var y = 99;

(function varTest2() {
    var x = 100;
    var y = 9; //함수 밖에는 안에있는것을 사용할수없다 
    z = 1;
    console.log('varTest2() : x+y+z=', x + y + z); //110
}());

// var y
console.log('y+z=', y + z);
// console.log('x+y+z=', x + y + z); //Number11.js:182 Uncaught ReferenceError: x is not defined
//3
//전역에서 실행한 for문의 내부변수 i
for (var i = 1; i <= 10; i++) {
    console.log(i); // 1~10까지 출력
} //11

function getNum() {
    console.log('getNum() : i=', i);
}
getNum();
//4 
function funcX() {
    var num = 100;
    return function () { //return
        console.log('num=', num);
    }
}
var num = 200;
var myf = funcX();
myf();