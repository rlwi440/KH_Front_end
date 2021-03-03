function check(chk) {
    var test = document.getElementsByName("product");
    for (var i = 0; i < test.length; i++) {
        //    if (test[i] != chk) {  test[i]  가 != chk 가 아닌경우  옮기는방식??
        if (test[i] != chk) {
            test[i].checked = false;
        }
    }
}