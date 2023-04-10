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

    // console.log(name);
    // if (name === "vocabulary_item") {
    //     const value = e.target.innerText;
    //     fetch(
    //         `https://translate.google.com/translate_tts?ie=UTF-&&client=tw-ob&tl=en&q=${value}`
    //     );
    //     console.log(e.target);
    //     console.dir(e.target);
    //     console.log(e.target.innerText);
    // }

    if (name === "vocabulary_item") {
        const value = e.target.innerText;
        // const msg = new SpeechSynthesisUtterance(`${value}`);
        // window.speechSynthesis.speak(msg);
        say(`${value}`);
    }
});

function say(m) {
    const msg = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    // msg.voice = voices[5];
    msg.voice = voices[6];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = m;
    msg.lang = "en-UK";
    speechSynthesis.speak(msg);
}
say("zebra");
