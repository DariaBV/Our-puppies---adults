(function () {
    const nextButton = document.querySelector('.btn-next');
    const prevButton = document.querySelector('.btn-prev');
    const slidesContainer = document.querySelector('.our-puppies-and-adults__carousel-slides .our-puppies-and-adults__carousel-items');
    const slides = Array.from(slidesContainer.children);
    const dotsNav = document.querySelector('.our-puppies-and-adults__indicators');
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (slidesContainer, currentSlide, targetSlide) => {
        slidesContainer.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('.current-slide');
        targetDot.classList.add('.current-slide');
    }

    prevButton.addEventListener('click', e => {
        const currentSlide = slidesContainer.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const prevDot = currentDot.previoustElementSibling;

        moveToSlide(slidesContainer, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
    });

    nextButton.addEventListener('click', e => {
        const currentSlide = slidesContainer.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling;

        moveToSlide(slidesContainer, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
    });

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');

        if (!targetDot) return;

        const currentSlide = slidesContainer.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(slidesContainer, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);

    });

})();