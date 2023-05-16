var slideIndex = 0;
var slides = document.querySelectorAll('.images');
var prevButton = document.querySelector('.previous');
var nextButton = document.querySelector('.next');

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translateX(' + (index * -100) + '%)';
  }
  slideIndex = index;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

prevButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);

// İlk slaytı göster
showSlide(slideIndex);
