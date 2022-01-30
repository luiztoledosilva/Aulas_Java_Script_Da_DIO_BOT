function square(numero) {
  return numero * numero;
}
undefined
numero(2)
Uncaught ReferenceError: numero is not defined
    <anonymous> debugger eval code:1
debugger eval code:1:1
numero(2);
Uncaught ReferenceError: numero is not defined
    <anonymous> debugger eval code:1
debugger eval code:1:1
square(2);
4
square(6);
36
function minhaFuncao(objeto) {
  objeto.make = "Toyota";
}

var meucarro = {make: "Honda", model: "Accord", year: 1998};…
"Toyota"
var square = function(numero) {return numero * numero};
var x = square(4) //x recebe o valor 16
undefined
x
16
var fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

console.log(fatorial(3));
6 debugger eval code:3:9
undefined
function map(f,a) {
  var result = []; // Cria um novo Array
  var i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);…
undefined
result
Uncaught ReferenceError: result is not defined
    <anonymous> debugger eval code:1
debugger eval code:1:1
map
function map(f, a)

map(25,55)
Uncaught TypeError: f is not a function
    map debugger eval code:5
    <anonymous> debugger eval code:1
debugger eval code:5:17
map[0,1,2,3,4,5,6,7,8,9]
undefined
map[0,1,2,3,4,5,6,7,8,9];
undefined
map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
Array(5) [ 0, 1, 8, 125, 1000 ]

var minhaFuncao;
if (num == 0){
  minhaFuncao = function(objeto) {
    objeto.make = "Toyota"
  }…
Uncaught ReferenceError: num is not defined
    <anonymous> debugger eval code:2
debugger eval code:2:5
objeto
Uncaught ReferenceError: objeto is not defined
    <anonymous> debugger eval code:1
debugger eval code:1:1
console.log(square(5));
var square = function (n) {
  return n * n;
}
25 debugger eval code:1:9
undefined
function fatorial(n){
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * fatorial(n - 1));…
undefined
fatorial
function fatorial(n)

fatorial(4)
24
var num1 = 20,
    num2 = 3,
    nome = "Chamahk";

// Esta função é definida no escopo global…
"Chamahk scored 5"
function loop(x) {
   if (x >= 10) // "x >= 10" a condição de parada (equivalente a "!(x < 10)")
      return;
   // faça coisas
   loop(x + 1); // chamada recursiva…
undefined
loop()
Uncaught InternalError: too much recursion
    loop debugger eval code:2
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
    loop debugger eval code:5
debugger eval code:2:8
function walkTree(node) {
   if (node == null) //
      return;
   // faça algo com o nó
   for (var i = 0; i < node.childNodes.length; i++) {…
undefined
walkTree()
undefined
walkTree();
undefined
walkTree(Node);
Uncaught TypeError: node.childNodes is undefined
    walkTree debugger eval code:5
    <anonymous> debugger eval code:1
debugger eval code:5:20
walkTree(Node)
Uncaught TypeError: node.childNodes is undefined
    walkTree debugger eval code:5
    <anonymous> debugger eval code:1
debugger eval code:5:20
walkTree(9)
Uncaught TypeError: node.childNodes is undefined
    walkTree debugger eval code:5
    <anonymous> debugger eval code:1
debugger eval code:5:20
function foo(i) {
   if (i < 0)
      return;
   document.writeln('begin:' + i);
   foo(i - 1);
   document.writeln('end:' + i);
}
foo(3);
undefined
foo(3)
undefined
foo(3);
undefined
function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);…
undefined
a = addSquares(2,3);3
3
a = addSquares(2,3);
13
b = addSquares(3,4);
25
c = addSquares(4,5);
41
function fora(x) {
   function dentro(y) {
      return x + y;
   }
   return dentro;…
undefined
fn_inside = fora(3);
function dentro(y)

result = fn_inside(5);
8
result1 = fora(3)(5);
8
function A(x) {
   function B(y) {
      function C(z) {
         alert(x + y + z);
      }…
undefined
function fora() {
   var x = 10;
   function dentro(x) {
      return x;
   }…
undefined
result = fora()(20);
20
var pet = function(nome) {          // A função externa define uma variável "nome"
      var getNome = function() {
        return nome;                // A função interna tem acesso à variável "nome"  da função externa
      }
…
undefined
myPet();
"Vivie"
var criarPet = function(nome) {
  var sex;

  return {
    setNome: function(newNome) {…
undefined
var pet = criarPet("Vivie");
pet.getNome();                  // Vivie

pet.setNome("Oliver");
pet.setSex("macho");…
"Oliver"
var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // Um código que não queremos que pessoas de fora sejam capazes de modificar

  return function () {
    return secureCode;…
undefined
getCode();
"0]Eal(eh&2"
var createPet = function(nome) {  // Função externa define uma variável chamada "nome"
  return {
    setNome: function(nome) {    // Função fechada define uma variável chamada "nome"
      nome = nome;               // ??? Como podemos acessar o "nome" definido pela função externa ???
    }…
undefined
function myConcat(separador) {
   var result = "", // inicializa a lista
       i;
   // itera por meio de argumentos
   for (i = 1; i < arguments.length; i++) {…
undefined
myConcat(", ", "red", "orange", "blue");
"red, orange, blue, "
function multiplicar(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a*b;
}
undefined
multiplicar(5);
5
function multiplicar(a, b = 1) {
  return a*b;
}
undefined
multiplicar(5);
5
function multiplicar(multiplicador, ...args) {
  return args.map(x => multiplicador * x);
}
undefined
var arr = multiplicar(2, 1, 2, 3);
undefined
console.log(arr);
Array(3) [ 2, 4, 6 ]
debugger eval code:1:9
undefined
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"…
undefined
var a2 = a.map(function(s){ return s.length });
undefined
var a3 = a.map( s => s.length );
undefined
function Pessoa() {      // O construtor Pessoa() define 'this' como sendo ele.
    this.idade = 0;
    setInterval(function crescer() {    // No modo não estrito, a função crescer define 'this'
            // como o objeto global, o que é diferente do 'this'
            // definido pelo construtor Pessoa().…
undefined
var p = new Pessoa();
undefined
