 /**
  * document객체 : 작성한 html5의 태그를 파싱해서, 변환된 js object를 가지고 있는 객체.
  * DOM Document Object Model
  * Document 메소드
  * Document 객체는 HTML 요소와 관련된 작업을 도와주는 다양한 메소드를 제공합니다.
  * HTML 요소의 선택
  * HTML 요소의 생성
  * HTML 이벤트 핸들러 추가
  * HTML 객체의 선택
  */
 function test1() {
     //  var li = document.getElementById("myli2");
     // 작은따옴표  쌍따옴표 상관없이 구분가능하다 .
     var li = document.getElementById('myli5');
     //존재하지 않는 객체 null 
     console.log(li); //태그객체
     //객체구조로 열람
     console.dir(li);
     //스타일 속성 변경
     li.style.color = '#333';
     li.style.backgroundColor = "lightblue";
 }

 /**
  * getElementsByTagName는 복수개의 요소를 가진 배열객체(짜가)를 리턴한다.
  * 이 함수는 태그의 있는 div, li, p 와 같은 특정 태그명을 가지고 있는 element 의 집합을 가져오는 함수이다.
  *따라서 반환되는 값은 HTML컬렉션 객체이며 for문 등을 사용하여 element 객체를 사용할수있다.
  */
 function test2() {
     var liArr = document.getElementsByTagName("li");
     // console.log(liArr);
     // console.log(liArr[0]);
     // console.log(liArr[1]);
     // console.log(liArr[2]);
     // console.log(liArr[3]);
     // console.log(liArr[4]);
     var b = 50;
     for (var i = 0; i < liArr.length; i++) {
         console.log(liArr[i]);
         liArr[i].style.color = "rgb(130, 220, " + b + ")";
         b += 50;
     }
 }

 /**
  * document.getElementsByClassName("클래스명")
  *이 함수는 태그의 class="" 속성을 사용하여 접근한다.
  * 동일한 class명이 존재할수 있기때문에  ( id속성은 html 문서에 동일한 id속성이 존재하면 안된다..) 
  *id 속성을 사용하여 접근하는 getElementById() 와 달리 getElementsByClassName() 은 컬렉션 객체를 반환한다.
  *따라서 for문을 사용하거나 특정 index에 위치한 element를 반환받아 사용할수있다.
  */
 function test3() {
     var groups = document.getElementsByClassName("group");
     console.log(groups);

     for (var i = 0; i < groups.length; i++) {
         var li = groups[i];
         li.style.color = "springgreen"; //색깔변경
     }
 }
 /**
  * 문서객체중 Name값을 가져오는데 사용되는함수이다
  * 읽은 객체는 배열로 저장된다
  */

 function test4() {
     var hobbies = document.getElementsByName("hobby");
     console.log(hobbies);

     for (var i = 0; i < hobbies.length; i++) {
         var hobby = hobbies[i];
         //체크여부
         if (hobby.checked) {
             console.log(hobby.value); //input태그의 value속성값 
         }
     }
 }


 /**
  * #userEmail을 입력하고, 확인을 눌렀을때 사용자 입력값을 경고창에 출력하세요.
  * - 아이디로 접근
  * - 태그명으로 접근
  * - name값으로 접근
  * -애매한 부분  헷갈렸던 이유 사용자 입력값에서  착오가 있었다 잊어 버리지 말자.  
  */
 function test5() {
     // var userEmail = document.getElementById("userEmail");
     // alert(userEmail.value);
     var inputs = document.getElementsByTagName("input");
     console.log(inputs);
     // alert(inputs[7].value);
     // var userEmails = document.getElementsByName("userEmail");
     // console.log(userEmails);
     // alert(userEmails[0].value); // getter

     //속성은 getter/setter처리 가능
     // userEmails[0].value = ''; // 초기화 setter
 }

 function test6() {
     // var amount = document.getElementById("amount");
     // var result = document.getElementById("result");

     //id속성으로 변수 선언없이 태그객체에 접근 가능(비표준)
     //시작태그/종료태그사이 내용으로 추가
     result.innerHTML = test.value;
 }

 /**
  * [name=subject]를 전체선택/해제
  * 
  * css선택자로 요소접근하기
  * - document.querySelector(선택자): 선택자와 일치하는 하나의 요소를 리턴
  * - document.querySelectorAll(선택자): 선택자와 일치하는 모든 요소를 유사배열로 리턴
  */
 function test7() {
     // var subjects = document.getElementsByName("subject");
     var subjects = document.querySelectorAll("[type=checkbox]");
     console.log(subjects);
     //  id="checkAll"  #checkAll부분 으로  찾기
     var checkAll = document.querySelector("#checkAll");
     console.log(checkAll);
     for (var i = 0; i < subjects.length; i++) {
         //setter로써 checked : #checkAll의 checked여부(true | false)를 세팅
         subjects[i].checked = checkAll.checked;
         //부모 td요소 클래스값 제어
         /*
         *   parentNode : 부모 노드
             childNodes : 자식 노드 리스트
             firstChild : 첫 번째 자식 노드
             lastChild : 마지막 자식 노드
             nextSibling : 다음 형제 노드
             previousSibling : 이전 형제 노드
          */
         checkAll.checked ?
             subjects[i].parentNode.classList.add("on") :
             subjects[i].parentNode.classList.remove("on");
     }
 }

 /**
  * 개별체크박스를 통해 전체선택 체크박스 제어하기
  */
 function test8(chk) {
     //this로 던져진 tag객체
     // console.log(chk);
     // console.dir(chk);
     //부모 td태그의 class값 제어
     var parentTd = chk.parentNode;
     console.log(parentTd);

     //태그객체의 classList속성을 통해서 다음 코드를 개선하라.
     //replace(oldClass, newClass) : oldClass를 newClass로 교체
     parentTd.classList.toggle("on");
     // if(chk.checked)
     // parentTd.classList.add("on");
     // parentTd.className = "on serious"; // 기존 class값이 제거되지 않도록 처리
     // else
     // parentTd.classList.remove("on");
     // parentTd.className = "serious";


     //전체 체크박스 제어
     var subjects = document.querySelectorAll("[name=subject]");
     //  var subjects = document.querySelectorAll("[type=checkbox]");
     for (var i = 0; i < subjects.length; i++) {
         if (!subjects[i].checked) {
             checkAll.checked = false;
             return; // 조기리턴
         }
     }
     checkAll.checked = true;
 }
 //   function test8(){
 //     var subjects = document.querySelectorAll("[name=subject]");
 //     var checkedSubjects = document.querySelectorAll("[name=subject]:checked");
 //     console.log(subjects);
 //     console.log(checkedSubjects);
 //     checkAll.checked = (subjects.length == checkedSubjects.length);
 //   }