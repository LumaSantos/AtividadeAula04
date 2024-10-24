//Atividade Aula 04

//Calculadora de Preço com ICMS 

// Função para calcular ICMS
const calcularICMS = x => x * 0.21;

// Função para calcular o preço do produto com ICMS
function precoDoProduto(primeiroNumero) {
    return primeiroNumero + calcularICMS(primeiroNumero);
}

// Função para calcular o preço final após o desconto
function precoFinal(precoProduto, desconto) {
    return precoProduto - desconto;
}

// Solicitar o valor do produto
var primeiroNumero = parseInt(prompt("Digite o valor do produto"));

// Solicitar o desconto
var desconto = parseInt(prompt("Digite o desconto"));

// Calcular ICMS e preço do produto
var icms = calcularICMS(primeiroNumero);
var precoProduto = precoDoProduto(primeiroNumero);
var precoFinalProduto = precoFinal(precoProduto, desconto);

// Exibir resultados
alert("ICMS: " + icms);
alert("Preço do produto com ICMS: " + precoProduto);
alert("Preço final após desconto: " + precoFinalProduto);
