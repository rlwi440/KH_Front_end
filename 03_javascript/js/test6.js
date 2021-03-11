//900909-1234566
//\d decimal 숫자
//[] 한글자 를 의미 
/**
 * 숫자 문자에 대응됩니다. [0-9]와 동일합니다.
예를 들어, /\d/ 또는 /[0-9]/는 "B2 is the suite number."에서 '2'에 대응됩니다.
 */
//test	대응되는 문자열이 있는지 검사하는 RegExp 메소드 입니다. true 나 false를 반환합니다
function testSSN() {
    //속성의값 value
    const str = document.getElementById('ssn').value;
    const s = /\d{6}-[1234]\d{6}/;
    //제일 이해 안갔던 부분 test는 true/false 예제이다.
    if (s.test(str)) {
        alert('올바른 주민번호입니다.');
    } else {
        alert('올바른 주민번호가 아닙니다.');
    }
}

/**
 * 개인적으로 공부하는공간 
 */
// let id = 'abc123';

// // 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
// // {4,10}: 4 ~ 10자리
// const num = /^[A-Za-z0-9]{4,10}$/;

// console.log(num.test(id)); // true
/**
const targetStr = 'This is a pen.';
const regexr = /is/ig;

// RegExp 객체의 메소드
//exec() 메서드는 주어진 문자열에서 일치 탐색을 수행한 결과를 배열 혹은 null로 반환합니다.
console.log(regexr.exec(targetStr)); // [ 'is', index: 2, input: 'This is a pen.' ]
console.log(regexr.test(targetStr)); // true

// String 객체의 메소드
console.log(targetStr.match(regexr)); // [ 'is', 'is' ]
console.log(targetStr.replace(regexr, 'IS')); // ThIS IS a pen.
// String.prototype.search는 검색된 문자열의 첫번째 인덱스를 반환한다.
console.log(targetStr.search(regexr)); // 2 ← index
console.log(targetStr.split(regexr)); // [ 'Th', ' ', ' a pen.' ]
*/


// let targetStr = 'abc#123';

// A-Za-z0-9 이외의 문자가 있는지 검사
//let regexr = /[^A-Za-z0-9]/gi;

//console.log(regexr.test(targetStr)); // true

// 특수 문자를 선택적으로 검사 문제
//강사님께 물어볼예제 개인적으로 궁금하다. 헷갈림 
// let str = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

// console.log(str.test(targetStr)); // true

// 특수 문자 제거
//console.log(targetStr.replace(regexr, '')); // abc123

/**
 * 강사님께질문드릴예제 질문 특수문자 쓰는기법, 이메일 예제 검사  이해안간다. 
 */
let email = 'rlwi440@gmail.com';
let str = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
console.log(str.test(email)); // true

let targetStr = 'abc#123';
// let num = /[^A-Za-z0-9]/gi;
// 특수 문자를 선택적으로 검사 문제
let num = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
console.log(num.test(targetStr));