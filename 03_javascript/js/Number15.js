/**
 * open 새로운 window생성
 * - 새탭
 * - 팝업창
 * 
 * open(url, name, specs)
 * - specs 문자열
 * - name : 팝업창이름, _self 지정시 현재창에서 열림.
 */
function test1() {
    w = open("13_object.html", "_self", "width=800, height=500, top=300, left=300");
    console.log(w);
    console.log(window == w);
    //1초 이후 실행
    setTimeout(function () {
        w.alert('hello js~');
    }, 1000);
}

var w; //팝업윈도우객체

function test2() {
    w && w.close();
}
/**
 * setTimesout(callbackFunction, mills );
 * mills초 이후에 callbackFunction 을 실행
 * 동기적(위에서 아래로, 좌에서 우로 순서대로 처리 )
 * timeoutAPI의 메소드는 비동기적으로 처리된다.
 * 
 */
function test3() {
    setTimeout(function () {
        alert("반갑습니다.");
    }, 3000);
    alert("안녕");
}
/**
 * 팝업창을열고 ,<h1> 3초 팝업 </H1>을작성
 * 3초이후에 자동으로 창이 닫히도록 하세요
 */
function test4() {
    /**
     * open(url,name,specs)
     * - specs  크기
     * - name : Neat youth
     */
    var popup = open(" ", "Neat youth", "width=500,height=500,top=300,left=200");
    console.log(popup);
    popup.document.write("<h1>3초 팝업</h1>");
    popup.alert("my name is bae ki ");
    //setTimesout(callbackFunction, mills );
    setTimeout(function () {
        popup.close();
    }, 3000); //3초공간
}
/**
 * setInterval(callbackFunction, millis)
 * millis초마다 callbackFunction을 실행
 */
function test5() {
    // var num = 1;
    // setInterval(function(){
    //   console.log(num++);
    // }, 1000);

    var foo = function () {
        var now = new Date(); //바로 나올수있게 
        var strFormat = getTimeFormatStr(now);
        document.querySelector("#clock").innerHTML = strFormat;
    };
    foo();
    setInterval(foo, 1000);

}

function getTimeFormatStr(time) {
    var f = function (n) {
        return n >= 10 ? n : "0" + n;
    };
    var hh = f(time.getHours());
    var mi = f(time.getMinutes());
    var ss = f(time.getSeconds());
    return hh + ":" + mi + ":" + ss;
}

function test6() {
    var cnt = 10;
    var cd = document.querySelector("#countdown");
    cd.style.display = "block"; //block 요소 

    var f = function () {
        cd.innerText = cnt--;
        if (cnt < 0) { //cnt값보다 작아지면 
            clearInterval(intervalId); //cleaRInterval(intervalID)멈춘다.
            cd.innerText = "퐝"; //멈추면 뻥
        }
    };
    f();
    var intervalId = setInterval(f, 1000);
    console.log(intervalId);
}

function test7() {
    //Mozilla/5.0 (Windows NT 10.0; Win64; x6
    console.log(navigator);
}
/**
 * location:
 */

function test8() {
    console.log(location);
    //페이지 새로고침
    //location.reload();
    //페이지 이동 
    // location.href = "https://www.naver.com/"
}
/**
 *history :방문기록 관련정보를 가진객체
 * back()뒤로가기
 * forward 앞으로가기
 * go(n) : 1|0(새로고침)|-1
 * history.back(): 윈도우 열람 이력에서 뒤로 이동 
history.forward(): 윈도우 열람 이력에서 앞으로 이동 
history.go();

 */
function test9() {
    console.log(history);
}
/**
 * screen : 모니터 관련정보를 가진객체
 * 내 모니터 에 대한 나의정보 
 */
function test10() {
    var w = 300;
    var h = 300;
    var left = (screen.availWidth - w) / 2 + screen.availLeft;
    var top = (screen.availHeight - h) / 2;

    open("", "popup", "width=300, height=300, left=" + left + ", top=" + top);
}
/**
 * dir:속성 집합 또는 텍스트 요소의 방향을 돌려줍니다.
 * Node 객체: 모든 DOM객체가 Node객체를 상속받는다.
 * Node 객체 안에 
 * H2 - HTMLHeadingElement - HTMLElement - Element - Node - EventTarget - Object
 *-firstchild|lastchild|chidNodes...
 -contains() |appendchild()|removechild()..
 */
function test11() {
    // var h2 = document.querySelector("h2:last-of-type");
    // console.dir(h2);
    // //img태그 동적으로생성
    // var img = document.createElement("img");
    // img.src = "images/Windowobejects.png";
    // img.style = "width:200px";
    // console.log(img);
    // document.querySelector(".img-wrapper").appendChild(img);
    //<img src="images/Windowobejects.png" style="width: 200px;">
    document.querySelector(".img-wrapper").innerHTML += '<img src="images/Windowobejects.png" style="width: 200px;">';
}