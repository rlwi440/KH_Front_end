function test1() {
    var pets = [{
            name: '감자',
            breed: '말티즈',
            weight: 4.5,
            Intellect: 'A'
        },

        {
            name: '감순이',
            breed: '요크셔테리어',
            weight: 3,
            Intellect: 'B'
        },

        {
            name: '감돌이',
            breed: '리트리버',
            weight: 25,
            Intellect: 'C'

        }
    ];
    console.log(pets);
    for (var i in pets) {
        //console.log(pets[i].name); //name
        pets[i].bark = function () {
            return this.weight > 10 ? '멍멍 ' : '왈왈';
        };
        console.log(pets[i].name + "가" + pets[i].bark() + "짖는다");
    }

}
/**
 * (this용법4)생성자함수안의 this는 현재객체를 가리킨다. 
 * 생성자 함수의 첫글자는 대문자로 작성하는것이 관례
 * new 연산자와 함께호출 
 */


function Pet(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    // this.bark = function () {
    //   return this.weight > 10 ? '멍멍' : '왈왈';
    //};
}
//Pet의 prototype 객체에 중복된 속성/메소드를 작성한다.
Pet.prototype.bark = function () {
    return this.weight > 10 ? '멍멍' : '왈왈';
};

function test2() {
    var pets = [
        new Pet('구리구리', '푸들', 4.5),
        new Pet('까미', '요크셔테리어', 3),
        new Pet('콩돌', '리트리버', 25),
    ];
    console.log(pets);
    for (var i in pets) {
        console.log(pets[i].name + "이/가 " + pets[i].bark() + " 짖는다.");
    }
}