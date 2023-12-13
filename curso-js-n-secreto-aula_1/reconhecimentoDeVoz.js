const elementChute = document.querySelector("#chute");
const SpeechRecognition = window.SpeechRecognition
    || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

recognition.start();



recognition.addEventListener('result', (e) => {


    function exibiChuteNaTela(chute) {
        elementChute.innerHTML = `<div>Você disse:</div>
        <span class="box">${chute}</span> 
        `
        veficaChuteValido(chute);

    }


    let chute = e.results[0][0].transcript;
    exibiChuteNaTela(chute)
});



recognition.addEventListener('end', () =>{
    recognition.start();
} )