const images = ["tweaker3.jpg", "msiAf.png", "ccleaner3.png"];
const gradients = [
    "linear-gradient(45deg, #6a0dad, #9400d3, #ff00ff)",
    "linear-gradient(45deg, #DB501E, #DB2762, #DB3522)",
    "linear-gradient(45deg, #1CD8D2, #93EDC7)"
];

const startScroll = 4590;
const step = 650;

let currentIndex = 0;

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < startScroll) return;

    const index = Math.min(Math.floor((scrollPosition - startScroll) / step), images.length - 1);

    if (index !== currentIndex) {
        currentIndex = index;

        const imgBox = document.querySelector(".img_boxReg img");

        imgBox.src = images[index];
        requestAnimationFrame(() => {
            document.documentElement.style.setProperty("--gradient", gradients[index]);
        });

        setTimeout(() => {
            imgBox.style.transform = "translateY(0)";
        }, 400);
    }
});
