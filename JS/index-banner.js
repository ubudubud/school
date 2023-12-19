document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const arrowLeft = document.querySelector(".left");
    const arrowRight = document.querySelector(".right");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(${-index * 100}%)`;
        updateDots(index);
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    arrowLeft.addEventListener("click", prevSlide);
    arrowRight.addEventListener("click", nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });


    setInterval(nextSlide, 3000); 
});