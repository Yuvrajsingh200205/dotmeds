document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.sliding-btn.prev');
    const nextBtn = document.querySelector('.sliding-btn.next');
    const slidingImages = document.querySelector('.sliding-images');
    const images = document.querySelectorAll('.sliding-images img');
    const totalImages = images.length;
    let index = 0;
    const intervalTime = 3000; 
    let slideInterval;

    function updatesliding() {
        const offset = -index * 100;
        slidingImages.style.transform = `translateX(${offset}%)`;
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            index = (index < totalImages - 1) ? index + 1 : 0;
            updatesliding();
        }, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    prevBtn.addEventListener('click', () => {
        stopAutoSlide(); 
        index = (index > 0) ? index - 1 : totalImages - 1;
        updatesliding();
        startAutoSlide(); 
    });

    nextBtn.addEventListener('click', () => {
        stopAutoSlide(); 
        index = (index < totalImages - 1) ? index + 1 : 0;
        updatesliding();
        startAutoSlide(); 
    });

    startAutoSlide(); 
});

// JavaScript for sliding functionality

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.sliding2-images');
    const images = document.querySelectorAll('.sliding2-images img');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let currentIndex = 0;
    const totalImages = images.length;
    let autoSlideInterval;

    const showSlide = (index) => {
        slides.style.transform = `translateX(${-index * 33.33}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showSlide(currentIndex);
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 2000); 
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    startAutoSlide();
});
