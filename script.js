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


window.addEventListener("DOMContentLoaded", function() {
  var currentUrl = window.location.pathname;
  var menuLinks = document.querySelectorAll("nav ul li a");

  for (var i = 0; i < menuLinks.length; i++) {
    var linkUrl = menuLinks[i].getAttribute("href");
    if (currentUrl === linkUrl) {
      menuLinks[i].classList.add("active");
    }
  }


})
function validateForm() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  var name = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

  if (name === '' || email === '' || message === '') {
    alert('Lütfen tüm alanları doldurun');
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Geçerli bir e-posta adresi girin');
    return false;
  }

  // Doğru giriş durumunda başka bir sayfaya yönlendirme
  if (email === 'dogru@mail.com') {
    window.location.href = 'dogru.html';
    return false;
  }

  // Yanlış giriş durumunda mesaj gösterme
  if (email === 'yanlis@mail.com') {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = 'Hatalı giriş yaptınız';
    return false;
  }

  return true;
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
