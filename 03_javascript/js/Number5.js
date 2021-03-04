//함수 밖 script 태그에 작성된 var 변수는 전역변수로 등록된다.
//최상위 객체 window의 속성으,로 등록된다.\
// Window 인터페이스는 다양한 함수, 이름공간, 객체, 생성자가 머무는 장소입니다.
var a;
a = 100; //변수의 타입이 결정.
var c;
c = 1234;

/**
 * 함수 안에 var 변수는 지역변수로 등록된다
 * 지역변수 는 함수 밖에서는 절대 접근할수없다.
 */
function test1() {
    var a = "아";
    // var a = true;
    //중복선언가능 끝에오는 친구만 가능
    //var a = false;
    var b = 123;
    console.log("a= " + a);
    console.log("b=" + b);

    console.log("전역변수 a =" + window.a);
    //(this용법2) 일반함수안에서 this는 window객체를 가리킨다
    console.log("전역변수 a =" + this.c);
    //var없이 선언된 변수는 함수안이라해도 전역변수로 등록
    // c = 'ㅋㅋㅋㅋ';
    // console.log("c= " + c);

}
/**
 * scope 유효범위
 * c-family언어가 가진 block scope 가 아닌,
 * JS 에서는 function scope를 가진다.
 * 2가지 타입이 있습니다. 바로 global(전역)과 local(지역) 
 */
function test2() {
    var x = 10;

    if (true) {
        var x = 100;
    }

    console.log(x);

    for (var i = 0; i < 10; i++) {

    }
    console.log(i);

}
/**
 * 함수밖은 다 전역변수이다 
 */
var k = 123.456;
if (true) {
    var k = 456.789;
}
console.log(k);
/**
 * use strict 엄격모드 지원
 * Strict Mode란?
    Strict Mode는 코드에 더 나은 오류 검사를 적용하는 방법입니다.
    Strict Mode를 사용하면, 예를 들어 암시적으로 선언한 변수를 사용하거나 읽기 전용 속성에 값을 할당하거나 확장할 수 없는 개체에 속성을 추가할 수 없습니다.
    Strict Mode는 ECMAScript 5 버전에 있는 새로운 기능으로써, 당신의 프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다. 이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.
    ES6 지원
    let -block scope 를 가진 변수 키워드
    const -block scope를 가진 상수 키워드 
 */
function test3() {
    "use strict";
    /**foo = 100; //Number5.js:68 Uncaught ReferenceError: foo is not defined
    console.log(x);*/
    let foo = 100;
    //let foo = 200;
    //05_variable_scope.html:17 Uncaught ReferenceError: test3 is not defined
    const bar = '상수 ';
    //Uncaught TypeError: Assignment to constant variable.
}