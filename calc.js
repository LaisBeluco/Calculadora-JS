// declaração da variável global document denominada como d
let d = document;
//Prepara variáveis
var number = "";
var formula = "";
var sinais = ["*", "+", "-", "/"];
// Verifica se acabou de ser executada a função calcular;
var formulaExecutada = false;

function insert(num) {
  // Verifica se o ultimo valor ou o primeiro é um sinal matemático.
  if (
    (!sinais.includes(formula.slice(-1)) || !sinais.includes(num)) &&
    !(formula.length == 0 && [/|[+/*]/gi].includes(num))
  ) {
    // Verifica se está sendo adicionado o sinais como primeiro valor
    //Verifica se possui um ponto
    if (!number.includes(".") || num != ".") {
      if (formulaExecutada && !sinais.includes(num)) {
        clean();
      }
      formulaExecutada = false;
      // Se adicionado o primeiro valor ".", coloca um "0." evitar erros
      if (number.length == 0 && num == ".") {
        number = "0.";
        formula = formula + "0.";
      } else {
        number = sinais.includes(num) ? "" : number + num;
        formula = formula + num;
      }

      // Se adicionado um sinais matemático ele adiciona a formula
      d.getElementById("resultado").value = formula;
    }
  }
}

function clean() {
  // Limpa todos os valores contidos no objeto Html resultado
  d.getElementById("resultado").value = "";
  formula = "";
  number = "";
}

function back() {
  //Armazena o conteúdo do objeto Html resultado na variável denominada como formula
  formulaExecutada = false;
  // Está selecionando e removendo o ultimo caractere
  formula = formula.slice(0, -1);
  // Dividindo a formula em números e pegando valor da ultima Array
  number = formula.split(/[+-/*]/gi).slice(-1)[0];
  // Imprimindo o valor
  d.getElementById("resultado").value = formula;
}

function calcular() {
  // Verifica se existe um valor na varíável
  if (formula) {
    // Está verificando se o ultimo caracter é um sinal e remove o mesmo
    if (sinais.includes(formula.slice(-1))) {
      formula = formula.slice(0, -1);
    }
    // Calcula o resultado da formula
    let resultado = eval(formula);
    // Imprime o resultado
    d.getElementById("resultado").value = resultado;
    // Define formula como resultado
    formula = resultado.toString();
    // Verifica se acabou de ser executado a função calcular()
    formulaExecutada = true;
  }
}

