const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const phonemeChartEl = $(".phonemeChart");
phonemeChartEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("img_single-1")) {
        const audio = $(".audio_single-1");
        audio.play();
    }
    if (e.target.classList.contains("img_single-2")) {
        const audio = $(".audio_single-2");
        audio.play();
    }
    console.log(123);
});
