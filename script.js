let convert = document.querySelector('.convert');
let textElement = document.querySelector('.text_elem');

let speech = new SpeechSynthesisUtterance();

convert.addEventListener('click', () => {
    speech.text = textElement.value;
    speech.pitch = 1;
    speech.volume = 1;
    speech.lang = 'en-US';
    speech.rate = 1;
    speechSynthesis.speak(speech)
})