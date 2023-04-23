const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const phonemeChartEl = $(".phonemeChart");
phonemeChartEl.addEventListener("click", (e) => {
    const name = e.target.classList[0];
    if (!name) return;
    const arrName = name.split("_");

    if (arrName[1] === "vowelsSingle" || arrName[1] === "vowelsDouble") {
        const audio = $(`.audio_${arrName[1]}_${arrName[2]}`);
        audio.play();
    }
});

const vocabularyListEl = $(".vocabulary_list");
vocabularyListEl.addEventListener("click", async (e) => {
    const name = e.target.classList[0];

    if (name === "vocabulary_item") {
        const value = e.target.innerText;
        console.log(value);
        say(`${value}`);
    }
});

const textSpeakBtnEl = $(".text_speak_btn");
textSpeakBtnEl.addEventListener("click", () => {
    const textToSpeechEl = $("#textToSpeech");
    const value = textToSpeechEl.value.trim();
    if (value === "") return;
    say(`${value}`);
});

function say(m) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[6];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 0.8;
    msg.pitch = 0.8;
    msg.text = m;
    msg.lang = "en-UK";
    speechSynthesis.speak(msg);
}
