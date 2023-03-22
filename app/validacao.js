function verificaseChuteTemValorValido(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML = '<div>Valor Inválido!</div>'
        return
    }
    if(numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML =`<div> O valor deve estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSorteado){
        document.body.innerHTML = `<h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSorteado}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`
    }else if(numero > numeroSorteado){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    }else{
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
