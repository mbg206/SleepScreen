const backgroundImage = document.getElementById("background-image");
let image = 0;

const setBackground = () => {
    image += Math.floor(Math.random() * 3) + 1;
    if (image > 3) image -= 4;
    
    backgroundImage.style.backgroundImage = `url(images/bg${image}.jpg)`;
}