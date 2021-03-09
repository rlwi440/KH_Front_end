function test1() {
    /**
     * 두개의 예제는 동일하다
     *  (속성명: 속성값)으로 구성된 요소를 관리하는 객체
     * -속성명: 식별자(문자열로 작성가능)
     * -속성값: 모든 타입가능.
     */
    var obj1 = {
        name: '홍길동',
        "age": 33,
        married: true,
        hobby: ['축구', '농구', '야구'],
        pet: {
            name: '감자',
            breed: '말티즈'
        },
        123: 456, //숫자 속성명 가능
        "foo-bar": 'ㅋㅋㅋ' //문자열은 반드시 감싸서 해줘야한다.
    };
    /**
     * obj2.가능
     */
    var obj2 = new Object();
    obj2.pname = '말린망고';
    obj2.price = 3000;
    obj2.ingredient = ['mango', 'sugar']; //dot notation
    obj2["origin"] = '필리핀'; //bracket notaiion 단 속성명은 문자열로 전달되어야한다.
    obj2["ty-pe"] = '피클'; //bracket notaiion 단 속성명은 문자열로 전달되어야한다.
    console.log(obj1);
    console.log(obj2);

    console.log(obj1.married);
    console.log(obj1.hobby[2]);
    console.log(obj2.pname);
    console.log(obj2["ty-pe"]);
    console.log(obj2['origin']);
    console.log(obj2.ingredient[1]); //sugar
    var arr = [1, 2, 3, [{
        a: 1
    }, {
        b: 2
    }, {
        c: {
            가: 1,
            나: 2,
            다: 3
        }
    }]]
    console.log(arr[3][2].c.다); // 3 식별자 한글 쓰면 안된다.
    console.log(arr[3][2].c.나);
    console.log(arr[3][2].c.가);
    console.log(arr[3][1].b); //b
    console.log(arr[3][0].a); //a
}

function test2() {
    var pet = {
        petName: '감자',
        eat: function (food) {
            console.log(this.petName + "가" + food + "를 먹는다, 냠냠!");
            //Number13.js:60 Uncaught ReferenceError: petName is not defined
            //(this용법3) 메소드에서 this는 현재객체를 가리킨다.
            //  console.log(pet.petName + "이/가 " + food + "을/를 먹는다, 냠냠!");좋은방법은아니다 
        }
    };
    pet.eat("개껌");
    //문자열 선언
    pet["eat"]("갈비");
    var propName = 'eat';
    pet[propName]('개우유');
    var Names = 'eat';
    pet[Names]('딸기우유');
}
var game;
/**
 * 단순for문이 아닌 for in문을 사용해서 모든 속성을 순회가능
 */
function test3() {
    game = {
        title: "DIABLO",
        price: 9900,
        lang: ["ko", "en", "cn"],
        run: function () {
            console.log(this.title + "을 실행합니다...");
            //시작시각 기록
            this["start-time"] = new Date();
        },
        shutdown: function () {
            console.log(this.title + "을 종료합니다...");
            //종료시각 기록
            this["end-time"] = new Date();
            //게임시간 계산
            var duration = (this["end-time"] - this["start-time"]) / 1000 / 60; //분단위
            duration = Math.floor(duration * 10) / 10;
            console.log(duration + "분동안 게임하셨습니다.");
        }
    };

    for (var key in game) {
        console.log(key + " : " + game[key]);
    }

    //game객체에 run메소드를 실행하면, start-time속성에 현재시각을 기록하세요.
    //game객체에 shutdown메소드를 실행하면, end-time속성에 끝낸 시각을 기록하세요.
    game.run();
}

function test4() {
    //game객체가 할당된 상태에서만 shutdown실행!
    game && game.shutdown();
}

function test5() {
    var student = new Object();
    student.name = '홍길동';
    student.class = 'M';
    student.no = 33;
    console.log(student);

    //속성제거
    delete student.no;
}
/**
 * 모든객체가 Object를 상속한다.
 * tostring Override
 * __proto__: Object 객체를 보여준다.
 * JS 는Prototype 기반으로 상속모델을 제공한다.
 */

function test6() {
    var notebook = {
        title: '오늘의 일기',
        content: '오늘은 자바스크립트와 즐거운 하루를보냈다.',
        date: new Date(),
        toString: function () {
            // return "{ title = " + this.title + ", content = " + this.content + ", date = " + this.date + "}";
            var str = "";
            for (var key in this) {
                key != "tostring" && (str += key + ":" + this[key] + " "); //key ! ="tostring "이 아니라면
            }
            return str;
        }
    };
    console.log("notebook : " + notebook); //notebook : [object Object]
    console.log(notebook); //__proto__: Object
}