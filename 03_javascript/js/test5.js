/**
 * Student 생성자함수를 통해 점수데이터 관리
 * -java
 * -oracle
 * -html
 * -css
 * -javascript
 * getsum
 * getAVG
 * tostring
 */
function test1() {
    //1.객체배열 생성및 추가
    var studetns = [
        new Student('배기원', 90, 56, 44, 34, 34),
        new Student('유관순', 90, 56, 44, 34, 28),
        new Student('감순이', 90, 56, 44, 34, 28),
        new Student('감툰이', 90, 56, 44, 34, 28)
    ];
    for (var i in studetns) {
        console.log(i + " " + studetns[i]); //" " 공백효과 
    }
}

function Student(name, java, oracle, html, css3, javascript) {
    this.name = name;
    this.java = java;
    this.oracle = oracle;
    this.html = html;
    this.css3 = css3;
    this.javascript = javascript;
    Student.prototype.getSum = function () {
        return this.java + this.oracle + this.html + this.css3 + this.javascript;
    };
    Student.prototype.getAvg = function () {
        return Math.round(this.getSum() / 5 * 10) / 10; //Math.round 
    };
    Student.prototype.toString = function () {
        return "이름=" + this.name + ", java=" + this.java + ", oracle=" + this.oracle + ", html=" + this.html + ",css=" + this.css3 + ", javascript= " + this.javascript +
            ", 총점=" + this.getSum() + ",평점=" + this.getAvg();
    }
}