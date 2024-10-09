const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function updateSlider() {
  const cardWidth = document.querySelector('.card').offsetWidth;
  const gap = 15; // The gap between cards
  slider.style.transform = `translateX(${-currentSlide * (cardWidth + gap)}px)`;
}

nextButton.addEventListener('click', () => {
  const totalSlides = document.querySelectorAll('.card').length;
  const visibleSlides = Math.floor(slider.offsetWidth / (document.querySelector('.card').offsetWidth + 15));

  if (currentSlide < totalSlides - visibleSlides) {
    currentSlide++;
    updateSlider();
  }
});

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-container'); // Select all slider containers
    sliders.forEach((slider) => {
        const cards = slider.querySelector('.slider');
        const nextButton = slider.querySelector('.next');
        const prevButton = slider.querySelector('.prev');

        let currentIndex = 0; // Track the current index of the visible card
        const cardCount = cards.children.length; // Total number of cards

        function updateSliderPosition() {
            const cardWidth = cards.children[0].getBoundingClientRect().width; // Get width of one card
            cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Move the cards
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cardCount; // Increment index and wrap around
            updateSliderPosition();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cardCount) % cardCount; // Decrement index and wrap around
            updateSliderPosition();
        });
    });
});
