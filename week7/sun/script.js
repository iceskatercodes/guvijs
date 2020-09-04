// var container = document.createElement("div");
// container.setAttribute("class", "my_container")

// var div1 = document.createElement("div");
// div1.setAttribute("class", "row-justify-content-center ");

// var div2 = document.createElement("div");
// div2.setAttribute("class", "col-sm-6");


// var form1 = document.createElement("form");
// form1.setAttribute("id", "form_1");
// form1.setAttribute("name", "calculator");
// document.body.append(form1);

// var dis = document.createElement("input");
// dis.setAttribute('type', "text");
// dis.setAttribute("name", "display");
// dis.setAttribute("class", "form_control");
// dis.addEventListener("keypress", (e) => restrictAlphabets(e));
// var linebreak = document.createElement("br");

// var btn1 = document.createElement("input");
// btn1.setAttribute('type', "button");
// btn1.setAttribute("name", "one");
// btn1.setAttribute("value", "1");
// btn1.setAttribute("onclick", "ClickOne()");

// var btn2 = document.createElement("input");
// btn2.setAttribute('type', "button");
// btn2.setAttribute("name", "two");
// btn2.setAttribute("value", "2");
// btn2.setAttribute("onclick", "ClickTwo()");

// var btn3 = document.createElement("input");
// btn3.setAttribute('type', "button");
// btn3.setAttribute("name", "three");
// btn3.setAttribute("value", "3");
// btn3.setAttribute("onclick", "ClickThree()");

// var btn4 = document.createElement("input");
// btn4.setAttribute('type', "button");
// btn4.setAttribute("name", "four");
// btn4.setAttribute("value", "4");
// btn4.setAttribute("onclick", "ClickFour()");
// var linebreak = document.createElement("br");

// var btn5 = document.createElement("input");
// btn5.setAttribute('type', "button");
// btn5.setAttribute("name", "five");
// btn5.setAttribute("value", "5");
// btn5.setAttribute("onclick", "ClickFive()");

// var btn6 = document.createElement("input");
// btn6.setAttribute('type', "button");
// btn6.setAttribute("name", "six");
// btn6.setAttribute("value", "6");
// btn6.setAttribute("onclick", "ClickSix()");

// var btn7 = document.createElement("input");
// btn7.setAttribute('type', "button");
// btn7.setAttribute("name", "seven");
// btn7.setAttribute("value", "7");
// btn7.setAttribute("onclick", "ClickSeven()");

// var btn8 = document.createElement("input");
// btn8.setAttribute('type', "button");
// btn8.setAttribute("name", "Eight");
// btn8.setAttribute("value", "8");
// btn8.setAttribute("onclick", "ClickEight()");
// var linebreak = document.createElement("br");

// var btn9 = document.createElement("input");
// btn9.setAttribute('type', "button");
// btn9.setAttribute("name", "nine");
// btn9.setAttribute("value", "9");
// btn9.setAttribute("onclick", "ClickNine()");

// var btn0 = document.createElement("input");
// btn0.setAttribute('type', "button");
// btn0.setAttribute("name", "zero");
// btn0.setAttribute("value", "0");
// btn0.setAttribute("onclick", "ClickZero()");

// var btn_sum = document.createElement("input");
// btn_sum.setAttribute('type', "button");
// btn_sum.setAttribute("name", "sum");
// btn_sum.setAttribute("value", "+");
// btn_sum.setAttribute("onclick", "ClickSum()");

// var btn_min = document.createElement("input");
// btn_min.setAttribute('type', "button");
// btn_min.setAttribute("name", "min");
// btn_min.setAttribute("value", "-");
// btn_min.setAttribute("onclick", "ClickMin()");
// var linebreak = document.createElement("br");

// var btn_pro = document.createElement("input");
// btn_pro.setAttribute('type', "button");
// btn_pro.setAttribute("name", "mul");
// btn_pro.setAttribute("value", "*");
// btn_pro.setAttribute("onclick", "ClickPro()");

// var btn_div = document.createElement("input");
// btn_div.setAttribute('type', "button");
// btn_div.setAttribute("name", "div");
// btn_div.setAttribute("value", "/");
// btn_div.setAttribute("onclick", "ClickDiv()");

// var btn_equal = document.createElement("input");
// btn_equal.setAttribute('type', "button");
// btn_equal.setAttribute("name", "equal");
// btn_equal.setAttribute("value", "=");
// btn_equal.setAttribute("onclick", "ClickEqual()");

// var btn_clr = document.createElement("input");
// btn_clr.setAttribute('type', "button");
// btn_clr.setAttribute("name", "clr");
// btn_clr.setAttribute("value", "clr");
// btn_clr.setAttribute("onclick", "ClickClr()");

// document.body.appendChild(container);
// container.append(div1);
// div1.append(div2);

// div2.append(form1);
// form1.append(dis,linebreak, btn1, btn2, btn3, btn4,linebreak, btn5, btn6, btn7, btn8,linebreak, btn9, btn0, btn_sum, btn_min,linebreak,  btn_pro, btn_div, btn_equal, btn_clr);


// function ClickOne() {
//     document.calculator.display.value += 1;
// }
// function ClickTwo() {
//     document.calculator.display.value += 2;
// }
// function ClickThree() {
//     document.calculator.display.value += 3;
// }
// function ClickFour() {
//     document.calculator.display.value += 4;
// }
// function ClickFive() {
//     document.calculator.display.value += 5;
// }
// function ClickSix() {
//     document.calculator.display.value += 6;
// }
// function ClickSeven() {
//     document.calculator.display.value += 7;
// }
// function ClickEight() {
//     document.calculator.display.value += 8;
// }
// function ClickNine() {
//     document.calculator.display.value += 9;
// }
// function ClickZero() {
//     document.calculator.display.value += 0;
// }
// function ClickSum() {
//     document.calculator.display.value += "+";
// }
// function ClickMin() {
//     document.calculator.display.value += "-";
// }
// function ClickPro() {
//     document.calculator.display.value += "*";
// }
// function ClickDiv() {
//     document.calculator.display.value += "/";
// }
// function ClickEqual() {
//     document.calculator.display.value = eval(document.calculator.display.value);
// }
// function ClickClr() {
//     document.calculator.display.value = "";
// }

// window.addEventListener("onkeydown", checkKeyPress);
// function checkKeyPress(key) {
//     if (keyCode >= 65 && keyCode <= 90) {
//         alert("enter a number!");
//     }
//     if (key.keyCode == "97") {
//         document.calculator.display.value += 1;
//     }
//     if (key.keyCode == "98") {
//         document.calculator.display.value += 2;
//     }
//     if (key.keyCode == "99") {
//         document.calculator.display.value += 3;
//     }
//     if (key.keyCode == "100") {
//         document.calculator.display.value += 4;
//     } if (key.keyCode == "101") {
//         document.calculator.display.value += 5;
//     }
//     if (key.keyCode == "102") {
//         document.calculator.display.value += 6;
//     }
//     if (key.keyCode == "103") {
//         document.calculator.display.value += 7;
//     }
//     if (key.keyCode == "104") {
//         document.calculator.display.value += 8;
//     }
//     if (key.keyCode == "104") {
//         document.calculator.display.value += 9;
//     }
//     if (key.keyCode == "96") {
//         document.calculator.display.value += 0;
//     }
// }
// restrictAlphabets = (e) => {
//     console.log(e.keyCode)
//     if (e.keyCode >= 97 && e.keyCode <= 123) {
//         e.preventDefault();
//     }
// }