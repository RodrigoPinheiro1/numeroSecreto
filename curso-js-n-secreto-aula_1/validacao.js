function numeroMaiorOuMenorQueValorPermitido(numero) {

    return numero > maiorValor  || numero < menorValor;
}

function veficaChuteValido(chute) {

    const numero =  +chute;

    if(chuteInvalido(numero)){
        console.log('valor invalido');
    }else if (numeroMaiorOuMenorQueValorPermitido(numero)){
        console.log(`o numero precisa estar entre ${menorValor} e ${maiorValor}`);

    }

}

function chuteInvalido (numero){

    return Number.isNaN(numero);
}