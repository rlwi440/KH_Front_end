function test1() {
    console.log(3 + 7 + "7");
    console.log(typeof (3 + 7 + "7")); //string
    console.log(7 - "7"); //7-7 =0
    console.log(7 * "7"); //49
    console.log(7 / "7"); //1
    console.log(7 % "4"); //3

    console.log(7 % "a"); // NaN Not a Number 숫자로 자동형변환이 불가한 우항
    console.log(typeof (NaN)); // NaN - number
    //null - object
}

function test2() {
    var num = "1234.567원";
    console.log(Number(num)); //1234.567 정수/실수 변환 .변환불가한 문자 있으면 NaN을 리턴
    console.log(parseInt(num)); //1234 정수변환.문자가 있어도 좌측부터 최대한 변환 
    console.log(parseFloat(num)); //1234.567 실수로 변환. 문자가 있어도 좌측부터 최대환 변환
}
/**
 * #num1 ,#num2의값을 더해서 출력하세요
 */
var test3 = function () {
    var sum = Number(num1.value) + Number(num2.value);
    console.log(sum);
}