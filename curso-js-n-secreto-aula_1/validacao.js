function numeroMaiorOuMenorQueValorPermitido(numero) {

    return numero > maiorValor || numero < menorValor;
}

function veficaChuteValido(chute) {

    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementChute.innerHTML += '<div> valor invalido</div> '
        return;
    }
    if (numeroMaiorOuMenorQueValorPermitido(numero)) {
        elementChute.innerHTML += `<div>o numero precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2>voce acertou o numero era ${numeroSecreto}</h2> 
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`

    } else if (numero > numeroSecreto) {

        elementChute.innerHTML += `
       
        <div> número secreto é menor <i class="fa-solid fa-down-long"></i></div> `


    } else {
        elementChute.innerHTML += `
     
        <div> número secreto é maior <i class="fa-solid fa-up-long"></i></div> `

    }

}

function chuteInvalido(numero) {

    return Number.isNaN(numero);
}

document.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
} )