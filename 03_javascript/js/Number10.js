/**
 * JS 배열은 크기제한, 타입제한이 없다.
 * ArrayList<object> 와 비슷.
 */
function test1() {
    var arr1 = [];
    var arr2 = new Array(); //new 연산자 사용가능
    var arr3 = new Array(3); //크기지정도 가능 
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    //값대입 
    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'b';
    arr1[3] = 'b';
    arr1[4] = 'b';
    arr1[5] = 'b';
    arr1[6] = 'b';

    arr3[0] = 'a';
    arr3[1] = 'b';
    arr3[2] = 'c';
    arr3[3] = 'b';
    //값 가져오기  
    console.log(arr3[3]);
    console.log(arr3[4]); // undef존재하지 않는 인덱스 
    //반복문 
    //     for (var i = 0; i < arr1.length; i++) {
    //         console.log(arr1[i]);
    //     }
    //for..in문 
    //배열 :i 변수에는 배열의 인덱스가 대입됨
    //객체 :i변수에 속성명이 대입됨
    for (var i in arr1) {
        console.log(i, arr1[i]);
    }
}
/**
 * 초기화 :변수 선언, 값대입 동시에 처리
 */
function test2() {
    var arr1 = [1, 2, 3]; //자바 int[] arr = {1, 2, 3};
    var arr2 = new Array("철수", "영희", "삼식");
    console.log(arr1);
    console.log(arr2);

    //타입제한 없다.
    var arr3 = [1, 2, 3, "안녕", true, 123.456, {
        id: "honggd"
    }];
    console.log(arr3);

    //2차원배열
    var arr4 = [1, 2, 3, ['a', 'b', 'c']];
    console.log(arr4);
    console.log(arr4[3][1]);

    //모든 요소를 열람
    for (var i in arr4) {
        console.log(arr4[i].length);
        if (arr4[i].length) {
            //배열인 경우
            for (var j in arr4[i])
                console.log(arr4[i][j]);
        } else
            //단순 요소인 경우
            console.log(arr4[i]);
    }

}
/**
 * 일반배열 :Array 객체상속 .Array 메소드 사용가능 
 * 유사배열 :Array 가 아닌 객체 상속 .Array 메소드 사용불가
 * _proto__: Array(0)는 가짜 .
 */
function test3() {
    var arr1 = [1, 2, 3];
    var arr2 = document.getElementsByTagName("input");
    console.log(arr1);
    console.log(arr2);
    //유사배열은 for ..in 사용하지 말것
    //유사배열 은 객체처럼 작동함. index가 아닌 속성명이 i에 담기게된다
    // for (var i in arr2) {
    //     console.log(i, arr2[i]); //0 1 2 length item ..
    // }
    for (var i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
    }
}
var test4 = function () {
    var arr = ['apple', 'melon', 'banana', 'banana', 'melon'];
    console.log(arr.indexOf('melon')); //존재하는 배열은 1 
    console.log(arr.indexOf('strawberry')); //존재하지않는배열 -1
    console.log(arr.lastIndexOf('melon')); //마지막요소 존재하는배열

}
/**
 * concat 두배열의 요소를 합쳐서 하나의 배열로 리턴
 */
var test5 = function () {
    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3, 4, 5];
    var arr3 = arr2.concat(arr1);
    console.log(arr1.concat(arr2)); //합쳐서 나온다
    //(8) ["a", "b", "c", 1, 2, 3, 4, 5]
    console.log(arr3); //(8) [1, 2, 3, 4, 5, "a", "b", "c"]
    console.log(arr1); //원본배열은 변경되지 않음

}
/**
 * join :요소를 지정한 구분자로 합펴서 문자열로 리턴
 */
var test6 = function () {
    var arr = [1, 2, 3, 4, 5, 6];
    var s = arr.join(); //구분자 생략시 ,로 연결함
    console.log(s);
    console.log(typeof s);
}
/**
 * reverse :원본 배열 요소의 순서를 뒤집어서 리턴 
 */

var test7 = function () {
    var arr = [1, 2, 3, 4, 5];
    console.log(arr.reverse()); //원본 배열을 변경
}
/**
 * sort 오름차순 (기본값) 정렬해서 리턴
 */
var test8 = function () {
    var arr = [4, 2, 3, 1, 5];
    console.log(arr.sort());
    console.log(arr);
    //내림차순
    //정렬기준함수(Call back함수)를 내림차순으로 처리되도록 전달
    arr.sort(function (a, b) {
        return b - a;
    });
    console.log(arr);
    //문자열 정렬
    var names = ['홍길동', '김길동', '라마단', '다나가'];
    console.log(names.sort());

    //내림차순
    names.sort(function (a, b) {
        if (a > b) return -1; // 음수가 리턴되면 자리교환이 일어난다
        if (a < b) return 1;
        return 0;
    });
    console.log('홍길동' - '김길동'); //Nan
    console.log('홍길동' > '김길동'); //true 크기 비교연산

    console.log(names);
}
/**
 * push배열 마지막에 요소추가후 변경된길이를 리턴
 * pop 배열 마지막요소를 제거하고,제거된 요소를리턴
 * unshift 배열 0번지요소 추가후,변경된 길이를 리턴
 * shit 배열 0번지 요소 제거후에 제거된 요소를리턴
 */
var test9 = function () {
    var arr = [];
    // arr.push(1);
    // arr.push(2);
    // arr.push(3)
    ;

    var k = 1;
    while (true) {
        arr.push(k++);
        if (k > 100) break;
    }
    //마지막요소 제거 : 제거된 요소 리턴
    // console.log(arr.pop());
    // console.log(arr.pop());
    var copy = [];
    var k = 1;
    while (true) {
        copy.push(arr.pop());
        if (++k > 100) break;
    }
}
var test10 = function () {
    var arr = ['사과', '배', '아보카도'];
    arr.unshift('감자');
    arr.unshift('양파');

    console.log(arr.shift()); // 제거된 요소 리턴

    console.log(arr);
}
/**
 * slice(startIndex(포함),endIndex(미포함))
 * startIndex부터 endIndex 전까지 의 요소를 가져와서 새 배열로 리턴
 */
var test11 = function () {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    // var other = arr.slice(1, 4);
    // var other = arr.slice(1); //1번지부터 끝까지 
    var other = arr.slice(); //복제
    console.log(other);
    console.log(arr);

}
/**
 * splice(startIndex,deltecount,item1,itme2 ...)
 * startIndex부터 deleteCount 개의 요소를 제거하고,
 * startIndex 에 item1 ,item2를 추가
 */
var test12 = function () {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    //a x y c d e
    arr.splice(1, 1, 'x', 'y');
    // a x k h e
    arr.splice(2, 3, 'k', 'h');
    //추가만 a x f r i k h e  2번째 인자부터  차례로
    arr.splice(2, 0, 'f', 'r', 'i');
    //제거만
    // arr.splice(2, 3);
    arr.splice(2); //2번지 이후 모든 요소 제거

    console.log(arr);
}
/**
 * prompt를이용해 사용자의 취미리스트 입력받으세요.
 * 예) 농구,수영 ,캠핑,낚시
 * ,구분자로 잘라서 배열로 담은후, 사전순 정렬이후 ,ul#hobby-list의 자식li태그 로 추가하세요
 */

/**
 * prompt를 이용해 사용자의 취미리스트를 입력받으세요.
 * 예) 농구,수영,캠핑,낚시
 * ,구분자로 잘라서 배열로 담은후, 
 * 사전순 정렬이후, ul#hobby-list의 자식li태그로 추가하세요.
 */
var test13 = function () {
    var hobbies = prompt("취미를 입력하세요. 예)농구,수영,캠핑,낚시");

    // null, "" 일때는 조기리턴처리
    if (!hobbies) {
        alert("입력값이 유효하지 않습니다.");
        return;
    }

    var arr = hobbies.split(",");
    arr.sort();
    console.log(arr);

    var result = document.querySelector("ul#hobby-list");

    //배열 요소마다 콜백함수를 실행
    //f("농구", 0)
    //f("수영", 1)
    //f("캠핑", 2)
    //f("낚시", 3)
    arr.forEach(function (food, idx) {
        result.innerHTML += "<li>" + food + "</li>";
    });

};


/**
 * arr.forEach (callback function(element,index){
 * //요소마다 실행구문
 * })
 * 
 * 유사배열도 사용가능
 */

var test14 = function () {
    var arr = [1, 2, 3, 4, 5];
    var sum = 0;
    arr.forEach(function (elem, i) {
        console.log(i, elem);
        sum += elem;
    });
    // alert(sum);

    var btnValues = [];
    document.querySelectorAll("input[type=button]").forEach(function (elem, i) {
        console.log(i, elem);
        btnValues.push(elem.value);
    });
    console.log(btnValues);

};


var test15 = function () {
    var drinks = [];
    /**배열요소*/
    document.querySelectorAll("li").forEach(function (elem, i) {
        drinks.push(elem.innerHTML);
        //읽어오기
    });
    console.log(drinks);
};