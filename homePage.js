const images1 = ["tweaker3.png", "msiAf.png", "ccleaner3.png"];
const gradients1 = [
    "linear-gradient(45deg, #6a0dad, #9400d3, #ff00ff)",
    "linear-gradient(45deg, #DB501E, #DB2762, #DB3522)",
    "linear-gradient(45deg, #1CD8D2, #93EDC7)"
];

const images2 = [
    "container_reg_pictures/reg_inside.png",
    "container_reg_pictures/rrm_inside.jpg",
    "container_reg_pictures/rw_inside.jpeg"]; // Здесь новые изображения для второго контейнера
const gradients2 = [
    "linear-gradient(45deg, #ff4500, #ff6347, #ff8c00)",
    "linear-gradient(45deg, #2e8b57, #3cb371, #228b22)",
    "linear-gradient(45deg, #0000ff, #4169e1, #6495ed)"
];

const startScroll1 = 1000; // Позиция начала для первого контейнера
const startScroll2 = 4000; // Позиция начала для второго контейнера
const step = 650;
const step2 = 650;


let currentIndex1 = 0;
let currentIndex2 = 0;

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Обработчик для первого контейнера
    if (scrollPosition >= startScroll1 && scrollPosition < startScroll2) {
        const index1 = Math.min(Math.floor((scrollPosition - startScroll1) / step), images1.length - 1);
        if (index1 !== currentIndex1) {
            currentIndex1 = index1;
            const imgBox1 = document.querySelector(".img_box img");
            imgBox1.src = images1[index1];
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty("--gradient", gradients1[index1]);
            });
            setTimeout(() => {
                imgBox1.style.transform = "translateY(0)";
            }, 400);
        }
    }

    // Обработчик для второго контейнера
    if (scrollPosition >= startScroll2) {
        const index2 = Math.min(Math.floor((scrollPosition - startScroll2) / step2), images2.length - 1);
        if (index2 !== currentIndex2) {
            currentIndex2 = index2;
            const imgBox2 = document.querySelector(".img_boxReg img");
            imgBox2.src = images2[index2];
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty("--gradient", gradients2[index2]);
            });
            setTimeout(() => {
                imgBox2.style.transform = "translateY(0)";
            }, 400);
        }
    }
});
