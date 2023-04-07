const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const phonemeChartEl = $(".phonemeChart");
phonemeChartEl.addEventListener("click", (e) => {
    const name = e.target.classList[0];
    const arrName = name.split("_");

    if (arrName[1] === "vowelsSingle") {
        const audio = $(`.audio_${arrName[1]}_${arrName[2]}`);
        audio.play();
    }
});
