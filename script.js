var currentSlide = 0;
var slides = document.getElementsByClassName('slide');

function showSlide(index) {
  // Tüm slaytları gizle
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Geçerli slaytı göster
  slides[index].style.display = 'block';
  currentSlide = index;
}

function nextSlide() {
  var nextIndex = currentSlide + 1;
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

function previousSlide() {
  var previousIndex = currentSlide - 1;
  if (previousIndex < 0) {
    previousIndex = slides.length - 1;
  }
  showSlide(previousIndex);
}

// İlk slaytı göster
showSlide(currentSlide);

// Geçiş düğmelerine tıklama olaylarını dinle
var nextButton = document.querySelector('.next');
nextButton.addEventListener('click', nextSlide);

var previousButton = document.querySelector('.previous');
previousButton.addEventListener('click', previousSlide);
