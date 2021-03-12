/**
 * 정규 표현식
 * 특정규칙을 가진 문자열 집합에 대한 형식언어
 * 유효성 검사,검색,문자열치환 처리등을 효율적으로 처리 할수있다.\
 * 간결한 코드를 만드는 표현식 숙지가 쉽지않다.
 * 언어 독립적
 *  이 패턴들은 RegExp의 exec 메소드와 test 메소드  ,그리고 String의  match메소드 , replace메소드 , search메소드 ,  split 메소드와 함께 쓰입니다 .
 * 
 */
function test1() {
    //객체생성l
    let re1 = /a/; //a를 검사하는
    let re2 = new RegExp(/[0-9]/);
    let re3 = new RegExp("[a-z]");
    console.log(re1.test('abcde')); //true
    console.log(re1.test('bcdef')); //false

    /**
     * true
        false
     */
    console.log(re2.test('hoggd123')); //true
    console.log(re2.test('hoggd')); //false

    console.log(re3.test('가나다ABC123')); //false
    console.log(re3.test('가나다ABc123')) //true
    //exec():[]
    console.log(re1.exec('abcde')); //["a", index: 0, input: "abcde", groups: undefined]
    /**
     * 문자열 match, search,replace,split
     */
    console.log('cba'.match(re1)); //["a", index: 2, input: "cba", groups: undefined]
    console.log('qweqweqw'.search(re1)); //존재하지않으면 -1
    console.log('caback'.replace(/a/g, 'A')); // cAbAck re1이랑 일치한다면 g플래그  여러가지 사용가능
    console.log('사과,배,양파,마늘'.split(/\s*,\s*/)); //4) ["사과", "배", "양파", "마늘"] 정규표현식  복수형 오늘 공부할내용
}
/**
 * flag문자
 * g  global 전역비교를 수행. 이게 없으면 첫 매칭만 처리.g 가 있으면 여러건 처리
 * i    ignore 영문자중에 대소문자를 구분하지 않고 비교수행
 * m  multi-line 여러줄(\n)이 있는경우 줄단위 비교수행
 */
function test2() {
    var str = 'JaS Jquery Ajax';
    //$&sms 매칭된 text를 가리키는 wild card
    //JaS Jquery Ajax a A a 색깔 다나온다.
    //area.innerHTML = str.replace(new RegExp("a", "gi"), "<mark>$&</mark>");  문자열로 가능
    area.innerHTML = str.replace(/a/gi, "<mark>$&</mark>"); //a만 정규표현식 마크형식 
}

/**
 * anchor 문자
 *  ^ 문자열시작
 *   area.innerHTML = str.replace(/^j/ig, "<mark>$&</mark>")
 * 문자열 의 시작은 알파벳 J만  ex)jax (o) ajax(x)
 *  $ 문자열 끝
 * // area.innerHTML = str.replace(/x/ig, "<mark>$&</mark>");
 * 문자열 마지막
 * 각 줄마다 x
 * area.innerHTML = str.replace(/x/igm, "<mark>$&</mark>");
 */

function test3() {
    var str = 'JS/nxxxx/njquery/nAjax';
    area.innerHTML = str.replace(/^j/igm, "<mark>$&</mark>");
    // area.innerHTML = str.replace(/x$/igm, "<mark>$&</mark>");
}
/**
 * 사용자로 부터 문자열을 입력받고
 * k로 시작하면서 h로 끝나는경우에는 잘하셨습니다.
 * 아닌경우 적합한 문자가 아닙니다 . 경고창을 뛰우세요
 */
function test4() {
    let input = prompt("알파벳 소문자 입력");
    let re1 = /^k/; //test 메소드
    let re2 = /h$/;
    if (re1.test(input) && re2.test(input)) {
        alert('굿.');
    } else {
        alert('땡.');
    }
}
/**
 * .포인터 임의의 한글자를 의미
 * 
 */
function test5() {
    const re1 = /^...$/;
    console.log(re1.test('ab')); //false
    console.log(re1.test('abc')); //true
    console.log(re1.test('abcd')); //false
    console.log(re1.test('a d')); //true 공백도 문자열
    console.log(re1.test('   ')); //true

    const re2 = /a.b/g;
    area.innerHTML = 'ab aab aaab '.replace(re2, " <mark>$&</mark>");
    const re3 = /in..$/; //in이후 두글자로 끝나는 문자열 검사
    const arr1 = ["going", "goin", "gointo", "going"];
    arr1.forEach(function (s) {
        console.log(re3.test(s));
    });
    const re4 = /^c...k$/; //c로 시작하고 k로 끝나는 총 5글자만 문자열 검사
    var arr2 = ["ck", "cbk", "cbak", "cbawk", "cbawak"];
    arr2.forEach(function (s) {
        console.log(re4.test(s));
        /**
         *  var re3 = /in..$/; // in이후 두글자로 끝나는 문자열 검사
    console.log(re3.test('goingo'));  // true
    console.log(re3.test('goin'));  //false
    console.log(re3.test('gointo')); //true
    console.log(re3.test('going')); //false
    var re4 = /^c...k$/;  // c로 시작하고 k로 끝나는 총 5글자인 문자열 검사
    console.log(re4.test('ck'));  // false
    console.log(re4.test('cbk')); // false
    console.log(re4.test('cbak')); // false
    console.log(re4.test('cbawk')); //  true
    console.log(re4.test('cbawak'));  // false
         */
    });
}
/**
 * []
 * 한글자를 의미하며 ,문자의 범위를 나타냄.
 * 
 * 대괄호 안에 사용된 ^특정문자제외
 */
function test6() {
    var s = "Javascript jquery Ajax 12345";
    // area.innerHTML = s.replace(/[aj]/g, "<mark>$&</mark>"); // a 또는 j
    // area.innerHTML = s.replace(/[^aj]/g, "<mark>$&</mark>"); // a 또는 j가 아닌 문자

    // area.innerHTML = s.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, "<mark>$&</mark>"); // 영대문자
    // area.innerHTML = s.replace(/[A-Z]/g, "<mark>$&</mark>"); // 영대문자
    // area.innerHTML = s.replace(/[0123456789]/g, "<mark>$&</mark>"); // 숫자
    // area.innerHTML = s.replace(/[0-9]/g, "<mark>$&</mark>"); // 숫자
    // area.innerHTML = s.replace(/[A-Za-z]/g, "<mark>$&</mark>"); // 영대문자 + 영소문자 
    // area.innerHTML = s.replace(/[A-Za-z0-9]/g, "<mark>$&</mark>"); // 영대문자 + 영소문자 + 숫자
    // var hangul = "안녕하세요, James입니다. I Love 서울!";
    let hangul = "ㅏ ㅏ .. ㅇㅇㅇ...음..ㅣㅣㅣㅘ"
    /**
     * ㄱ-ㅎ ㅏ-ㅣ가-힣 자음부모음부 
     */
    area.innerHTML = hangul.replace(/[ㄱ-ㅎ ㅏ-ㅣ가-힣]/g, "<mark>$&</mark>"); //
}

function test7() {
    var id = prompt("id 입력해주세요.");
    if (/^[0-9]/.test(id)) {
        alert("아이디는 숫자로 시작할 수 없습니다.");
        return;
    }

    var pwd = prompt("pwd 입력해주세요.");
    if (!/^[0-9][0-9][0-9][0-9]$/.test(pwd)) {
        alert("비밀번호는 숫자4자리여야합니다.");
        return;
    }

    alert("id : " + id + ", pwd :" + pwd);

}

/**
 * 
 * \d decimal 숫자
 * \w word 영문자, 숫자, _
 * \s space 공백문자, 탭, 개행문자
 * 
 * /D 숫자가 아닌 문자  [^0-9  ]
 * /W 영문자,숫자가 아닌 문자   [^  ]
 * /S 공백문자,탭,개행문자가 아닌문자 
 */
function test8() {
    var s = "A1 B2 c3 d_4 e:5' ` ffGG6767--__--!@#$%^&*()     가\n나\n다\n";
    // area.innerHTML = s.replace(/[0-9A-Za-z_]/g, "<mark>$&</mark>"); //언더스코어 까지 포함
    // area.innerHTML = s.replace(/[0-9A-Z_]/gi,"<mark>$&</mark>"); 영문자 
    area.innerHTML = s.replace(/[^0-9A-Za-z_]/g, "<mark>$&</mark>"); //공백문자개행
    // area.innerHTML = s.replace(/[\t\n]/gi, "<mark>$&</mark>")
    // area.innerHTML = s.replace(/\d/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\w/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\s/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\D/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\W/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\S/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\d/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\w/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\s/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\D/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\W/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/\S/g, "<mark>$&</mark>");

}
/**
 * ()griuoing
 * |or
 */
function test9() {
    let s = "월요일에는 월요병, 화요일은 화가 부글부글, " +
        "수요일은 술이 확 땡긴다. 목요일이 목이 컥 막히고, 금요일은 금방 올거 같지 않다.";
    // area.innerHTML = s.replace(/(수요일|목요일|금요일)/g, "<mark>$&</mark>");       //단어단위 
    // area.innerHTML = s.replace(/[수목금]요일)/g, "<mark>$&</mark>"); //한글자는 [] 묶어서 
    area.innerHTML = s.replace(/(수|목|금)요일/g, "<mark>$&</mark>"); //단어단위 

}
/**
 * escaping
 * 메타문자를 실제문자값으로 사용하려면, \ 역슬래시를 통해 escaping처리한다.
 * []안에서는 escaping필요없음. ^은 첫째자리 사용하지 말것.
 */
function test10() {
    var s = "$12$ \\-\\ $25$";
    // area.innerHTML = s.replace(/\$/g, "<mark>$&</mark>");    //$ 표시
    // area.innerHTML = s.replace(/^\$/g, "<mark>$&</mark>");   //처음시작하는 구간
    area.innerHTML = s.replace(/\$$/, "<mark>$&</mark>"); //끝나는구간


}
/**
 * 수량자 
 * a* a가 0개 이상
 * a+    a가 1개이상 
 * a? a가 0|1개
 */

function test11() {
    var s = "aabc abc bc";
    area.innerHTML = s.replace(/a?b/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/a+b/g, "<mark>$&</mark>");   //1개이상
    // area.innerHTML = s.replace(/a*b/g, "<mark>$&</mark>");       
}

function test12() {
    var s = "aa aba abba abbba";
    // area.innerHTML = s.replace(/ab{2}a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab{1,2}a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab{2,}a/g, "<mark>$&</mark>");

    // area.innerHTML = s.replace(/ab*a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab{0,}a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab+a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab{1,}a/g, "<mark>$&</mark>");
    area.innerHTML = s.replace(/ab?a/g, "<mark>$&</mark>");
    area.innerHTML = s.replace(/ab{0,1}a/g, "<mark>$&</mark>");
    //숫자로시작하고, 영문자3글자이상 나오고, .마침표로 끝나는 문자열을 검사하는 정규식 작성
    // true : 1abc안녕하세요. 3xyzkkk. 1ABC.
    // false : 100 1cbㅋㅋㅋ. 아아아아. 
    ["1abc안녕하세요.", "3xyzkkk.", "1ABC."].forEach(function (s) {
        console.log(/ /.test(s)); // true
    });

    ["100", "1cbㅋㅋㅋ.", "아아아아.", "1가나다abc.", "123abc다나가."].forEach(function (s) {
        console.log(/ /.test(s)); // false
    });
}
/**
 * Look Around:문자열 검사후 최종패턴에는 포함되지않는다.
 * -000(?=(re)):000다음 re 일치
 * -000(?!(re)):000다음 re일치하지 않아야함. 000만 최종반환
 * 2.look behind (re):000다음 re일치 .000만 최종반환
 * -(?<=(re))000: 000이전 re 일치  .000만 최종반환 
 * -(?<!(re))000: 000이전 re 일치하지않아야함. 000만 최종반환
 * 
 */
function test13() {
    var s = "hello world hello Tom hello Jane";
    // area.innerHTML = s.replace(/hello(?=( world))/g, '<mark>$&</mark>');
    // area.innerHTML = s.replace(/hello(?!\sworld)/g, '<mark>$&</mark>');
    s = "hello world lotte world t world";
    // area.innerHTML = s.replace(/(?<=hello )world/g, '<mark>$&</mark>'); //나오는것
    area.innerHTML = s.replace(/(?<!hello )world/g, '<mark>$&</mark>'); //아닌것은
}