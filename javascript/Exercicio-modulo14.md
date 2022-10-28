# Exercícios:
1. Resolva as operações:
* 10 + 15 = 25 (number)
* “10” + 2 = "102" (string)
* “10” * 2 = 20 (number)
* “10” / 3 = 3 (number)
* “10” % 3 = 1 (number)
* 10 + true = 11 (number)
* 10 == ”10” = true (boolean)
* 10 === “10” = false (boolean)
* 10 < 11 = true (boolean)
* 10 > 12 = false (boolean)
* 10 <= 10.1 = true (boolean)
* 10 > 9.99 = true (boolean)
* 10 != “dez” = true (boolean)
* 10 + true = 11 (boolean)
* “dez” + true = "deztrue" (string)
* 10 + false = 10 (number)
* 10 * false = 0 (number)
* true + true = 2 (number)
* 10++ = 11 (number)
* 10-- = 9 (number)
* 1 & 1 = 1 (number)
* 1 & 0 = 0 (number)
* 0 & 0 = 0 (number)
* 1 & 0 = 0 (number)
* 0 / 1 = 0 (number)
* 5 + 5 == 10 = true (boolean)
* “5” + ”5” == 10 = false (boolean)
* “5” * 2 > 9 = true (boolean)
* (10 + 10) * 2 = 40 (number)
* 10 + 10 * 2 = 30 (number)

2. Responda as perguntas de acordo com as variáveis.
var branco = “preto”;
var preto = “cinza”;
var cinza = “branco”;
var carro = “preto”;
var valor = 30000;
var prestacao = 750;
a) branco == “branco”
R: false
b) branco == cinza
R: false
c) carro === branco
R: true
d) var cavalo = carro == “preto” ? “cinza” : “marron”;
R: "cinza"
e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.
R: 36 prestações
   
   var qtd = (valor - 3000) / prestacao;
   console.log('Total de prestações: ' + qtd);

f) Somando as variáveis de cores é formada uma string de quantos caracteres?
R: 16

  var total = branco + preto + cinza;
  console.log(total.length);