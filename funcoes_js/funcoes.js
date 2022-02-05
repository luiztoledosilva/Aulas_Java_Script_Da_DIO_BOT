//const soma = function(a, b) {
//return a + b;

//}

//soma(1, 2)
//soma(5,4)

///console.log(soma(1, 2));

/*(
    function(a, b) {

        return a + b;

    }



)(1,2)
*/

const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);

}

const soma = function(num1, num2) {

    return num1 + num2;
}

const sub = function(num1, num2) {

    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const restultSub = calc(sub, 1, 2);

console.log(resultSoma);
console.log(restultSub);