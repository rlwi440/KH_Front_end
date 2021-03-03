function test1() {
    // 변수 선언시var 키워드 사용 
    var i;
    console.log(i, typeof (i)); //undefined  undifined


    //값대입이 일어날때,변수타입이 결정된다
    i = 100; //i는 숫자형 변수(정수,실수)
    console.log(i, typeof (i));
    i = 3.57; //
    console.log(i, typeof (i));
    i = "ㅋㅋㅋ이게 좋다고 ㅋㅋ";
    console.log(i, typeof (i));
    i = '안녕'; // "", ''감싸서 문자열 변수
    console.log(i, typeof (i));
    i = true;
    console.log(i, typeof (i)); //boolean형 
    //객체
    //배열도 하나의 객체
    i = [1, 2, 3, '안녕'];
    console.log(i, typeof (i)); //object

    //속성명 : 속성값(any)
    i = {
        name: '홍길동',
        age: 30,
        hobby: ['축구', '농구', '야구']
    };
    console.log(i, typeof (i));

    //자바스크립트 함수 매개변수 선언부 역시 자료형을 선언하지 않는다.
    //함수를 값으로 취급한다.
    i = function (x, y) {
        return x + y;
    };
    console.log(i, typeof (i));
    console.log(i(3, 7));
    i = new Date(); //생성자 함수를 호출
    console.log(i, typeof (i));
    i = function (x, y) {
        return x * y;
    };
    console.log(i, typeof (i));
    console.log(i(3, 4));
    i = {
        name: '홍길동',
        age: 30,
        hobby: ['축구', '농구', '야구']
    };
    console.log(i, typeof (i));
    i = {
        name: '배기원',
        age: 30,
        hobby: ['음악감상', '음악듣기']
    };
    console.log(i, typeof (i));
}