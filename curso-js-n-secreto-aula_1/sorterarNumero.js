

const elementMenorValor = document.querySelector("#menor-valor");
const elementMaiorValor = document.querySelector("#maior-valor");

const menorValor = 10;
const maiorValor = 1000;

const numeroAlet = gerarNumero();


function gerarNumero() {

    return parseInt(Math.random() * maiorValor+1);

}
console.log(numeroAlet);
elementMenorValor.innerHTML = menorValor ;
elementMaiorValor.innerHTML = maiorValor;
