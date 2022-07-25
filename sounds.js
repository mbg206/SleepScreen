const s = document.getElementById("status");
const select = document.getElementById("sounds");
const volume = document.getElementById("volume");

let audio = new Audio();

const changeSounds = async () => {
    s.style.opacity = 1;

    let url = `sounds/${select.value}.mp3`;
    
    audio.pause();
    audio = new Audio(url);
    audio.loop = true;
    volume.oninput();
    audio.onerror = (e) => {
        s.innerHTML = `Error: ${audio.error.message}`;
    }
    await new Promise(res => audio.addEventListener("canplaythrough", res, {once: true}));
    audio.play();
    
    s.style.opacity = 0;
}

volume.oninput = () => {
    audio.volume = volume.value;
}
select.oninput = changeSounds;

(async () => {
    await changeSounds();
    
    s.style.opacity = 0;

    setInterval(clockLoop, 1000);
    clockLoop();
    
    backgroundImage.classList.add("background-animation");
    setBackground();
    backgroundImage.addEventListener("animationiteration", setBackground);
})();