var meuCarro = new Object();
undefined
meuCarro.fabricacao = "Ford";
"Ford"
meuCarro.modelo = "Mustang";
"Mustang"
meuCarro.ano = 1969;
1969
meuCarro.semPropriedade;
undefined
meuCarro.modelo;
"Mustang"
meuCarro["fabricacao"] = "Ford";
"Ford"
meuCarro.ano;
1969
var meuObj = new Object(),
    str = "minhaString",
    aleat = Math.random(),
    obj = new Object();
…
"Mesmo uma string vazia"
console.log(meuObj);
Object { tipo: "Sintaxe de ponto", "data de criacao": "String com espaco", minhaString: "valor de String", "0.14720912127359975": "Numero Aleatorio", "[object Object]": "Objeto", "": "Mesmo uma string vazia" }
debugger eval code:1:9
undefined
var nomeDaPropriedade = "fabricacao";
undefined
meuCarro[nomeDaPropriedade] = "Ford";
"Ford"
nomeDaPropriedade = "modelo";
meuCarro[nomeDaPropriedade] = "Mustang";
"Mustang"
function mostrarProps(obj, nomeDoObj) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";…
undefined
meuCarro.fabricacao;
"Ford"
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}
undefined
var meucarro = new Carro("Eagle", "Talon TSi", 1993);
undefined
var carroDeKen = new Carro("Nissan", "300ZX", 1992);
undefined
carroDeKen.ano
1992
function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}
undefined
var jose = new Pessoa("Jose Silva", 33, "M");
undefined
pessoa.nome;
Uncaught ReferenceError: pessoa is not defined
    <anonymous> debugger eval code:1
debugger eval code:1:1
Pessoa.nome;
undefined
Pessoa.nome
undefined
jose.nome;
"Jose Silva"
jose.sexo;
"M"
jose.idade;
33
var Animal = {
  tipo: "Invertebrados", // Propriedades de valores padrão
  qualTipo : function() {  // Método que ira mostrar o tipo de Animal
    console.log(this.tipo);
  }…
Invertebrados debugger eval code:4:13
Peixes debugger eval code:4:13
undefined
function mostreCarro() {
  var resultado = "Um belo " + this.ano + " " + this.fabricacao
    + " " + this.modelo;
  pretty_print(resultado);
}
undefined
this.mostreCarro = mostreCarro;
function mostreCarro()

function Carro(fabricacao, modelo, ano, proprietario) {
  this.fabricacao = fabricacao;
  this.modelo = modelo;
  this.ano = ano;
  this.proprietario = proprietario;…
undefined
carro1.mostreCarro();
carro2.mostreCarro();
Uncaught ReferenceError: carro1 is not defined
    <anonymous> debugger eval code:1
debugger eval code:1:1
