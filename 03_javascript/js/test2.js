function btn() {
    var text = document.querySelectorAll("[id=textId]");

    // var text = document.querySelectorAll("[type=text]");
    var test = "";

    test += "구입자 : " + text[0].value + "<br>";
    test += "구입상품 : " + text[1].value + "<br>";
    test += "구매가격 : " + text[2].value + '만원';

    area.innerHTML = test;

}