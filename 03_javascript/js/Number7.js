/**
 * String 내장 객체 :문자열 관련 메소드를 제공
 */
var test1 = function () {
    var str = "samsung Apple xiomi";
    console.log(str.length); //length 속성 
    console.log(str.toLowerCase()); //samsung apple xiomi
    console.log(str.toUpperCase()); //samsung apple xiomi
    console.log(str.indexOf('ms')); //앞에서 부터  2
    console.log(str.lastIndexOf('i')) //뒤에서 부터 찾는내용 18
    console.log(str.charAt(8)); //문자열 하나 찾기 
    console.log(str[8]); //문자열->문자배열 취급
    //문자열 일부를 리턴: 3번지 ms 를 잘라오기 
    //substring (Start,end) start인덱스는 포함 end 인덱스 는 포함되지 않는다.
    console.log(str.substring(2, 4)); //ms 
    // console.log(Str.substring(2)); //msung Apple xiomi
    //substr(start[,length])
    console.log(str.substr(2)); //msung Apple xiomi

    var arr = str.split(" ");
    console.log(arr);

};
/**
 * 두개의 인자 문자열과 문자를 입력받고, 문자열에서 문자가 몇번 출력하는 함수를 생성
 * countchar ("hahaha", "a")=> 3
 * countchar ("abccba", "c")=> 3
 * countchar ("abcde", "x")=> 3
 * 예제 혼자서 연습
 * 
 */

var test2 = function () {
    var result = countchar("hahaha", "a");
    console.log(result);
    var result = countchar("abccba", "c");
    console.log(result);
    var result = countchar("abcde", "x");
    console.log(result);
};
var countchar = function (str, ch) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ch)
            sum++
    }
    return sum;
};
/**
 * 1. Math.min()

2. Math.max()

3. Math.random()

4. Math.round()

5. Math.floor()

6. Math.ceil()

7. Math.sin()
Math.round() 메소드는 인수로 전달받은 값을 소수점 첫 번째 자리에서 
반올림하여 그 결괏값을 반환합니다.
 */
var test3 = function () {
    var num = 123.456;
    console.log(Math.round(num)); //123
    console.log(Math.round(num * 100) / 100); //123.46
    console.log(Math.ceil(num * 10) / 10); //123.5
    console.log(Math.floor(num * 10) / 10); //123.4
    console.log(Math.floor(num)); //123

    console.log(Math.trunc(Math.random() * 10 + 1));
    // 난수*경우의수+최소값 trunc값  반올림방식

}
/**
 * #test-rnd 하위 li 태그에 1~100사이의 난수를 대입하세요
 * 단 ,짝수라면 글자색을 예쁘게 할것
 */
function test4() {
    var rnd = document.getElementsByTagName('li');
    for (var i = 0; i < rnd.length; i++) {
        rnd[i].innerText = Math.round((Math.random() * 100 + 1));
        //짝수 라면 글자색 
        if ((rnd[i].innerText) % 2 == 0)
            rnd[i].style.color = "blue";
    }
}
/**
 * Date는 객체생성시점의 날짜 /시각정보를 가진객체
 */
var test5 = function () {

    var now = new Date(); // new 연산자 사용가능
    console.log(now);

    var time1 = new Date(2000, 0, 1); // 월은 0-based 인덱스
    console.log(time1);
    var time2 = new Date(2000, 0, 1, 15, 30, 50);
    console.log(time2);
    var time3 = new Date("1999/03/01 15:34:20"); //날짜형식의 문자열도 처리가능
    console.log(time3);

    displayDateTime(now); // 1999/03/01(화) 15:34:20 형식으로 출력할것.
};

/**
 * 한번더 연습해보기 
 */
var displayDateTime = function (dt) {
    var yyyy = dt.getFullYear();
    var mm = get2digit(dt.getMonth() + 1);
    var dd = get2digit(dt.getDate());
    var day = dt.getDay(); //일(0) ~ 토(6)
    var dayArr = ['일', '월', '화', '수', '목', '금', '토'];
    var hh = get2digit(dt.getHours());
    var mi = get2digit(dt.getMinutes());
    var ss = get2digit(dt.getSeconds());
    alert(yyyy + "/" + mm + "/" + dd +
        "(" + dayArr[day] + ") " +
        hh + ":" + mi + ":" + ss);
};

var get2digit = function (n) {
    return n.toString().padStart(2, '0'); //2 가 자릿수 
    //return n < 10 ? '0' + n : n;
};