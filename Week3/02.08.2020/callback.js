function second(a, b) {
    var opr1 = 10;
    var opr2 = 90;
    a -= 1;
    return b[a](opr1, opr2);  // calling the function
}

let arr = [
    function add(a, b) {
        return a + b;
    },
    function sub(a, b) {
        return a - b;
    },
    function mul(a, b) {
        return a * b;
    },
    function div(a, b) {
        return a / b;
    },
    function rem(a,b){
        return a % b;
    }
];  // Array of functions

console.log(second(1, arr)) // 100
console.log(second(2, arr)) // -80
console.log(second(3, arr)) // 900
console.log(second(4, arr)) // 0.111
console.log(second(5, arr)) // 10