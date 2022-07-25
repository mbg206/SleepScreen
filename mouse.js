const toolbar = document.getElementById("toolbar");

const createTimeout = () => setTimeout(() => {
    toolbar.style.opacity = 0;
    document.body.style.cursor = "none";
}, 7500);

let mousestopTimeout = createTimeout();

document.onmousemove = () => {
    clearTimeout(mousestopTimeout);
    toolbar.style.opacity = 1;
    document.body.style.cursor = "default";
    mousestopTimeout = createTimeout();
}
document.onmousedown = document.body.onmousemove;

document.onkeydown = (e) => {
    if (e.code === "Space" && audio.readyState === 4) {
        if (audio.paused) audio.play();
        else audio.pause();
    }
    else if (e.code == "KeyF") {
        document.body.requestFullscreen();
    }
}