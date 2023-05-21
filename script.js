



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
})
document.getElementById('ContactForm').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var gender = document.getElementById('gender').value;
  var message = document.getElementById('message').value;

  if (!name || !email || !phone || !gender || !message) {
    showErrorMessage('Lütfen tüm alanları doldurun');
    return;
  }

  if (!isValidEmail(email)) {
    showErrorMessage('Geçerli bir e-posta adresi girin');
    return;
  }

  if (!isValidPhone(phone)) {
    showErrorMessage('Telefon numaranız 11 haneli olmalıdır');
    return;
  }

  showSubmittedData(name, email, phone, gender, message);
  clearForm();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{11}$/.test(phone);
}

function showErrorMessage(message) {
  alert(message);
}

function showSubmittedData(name, email, phone, gender, message) {
  var submittedDataContainer = document.getElementById('submittedData');
  submittedDataContainer.innerHTML = '';

  var submittedName = document.createElement('p');
  submittedName.textContent = 'Adınız: ' + name;
  submittedDataContainer.appendChild(submittedName);

  var submittedEmail = document.createElement('p');
  submittedEmail.textContent = 'E-posta Adresiniz: ' + email;
  submittedDataContainer.appendChild(submittedEmail);

  var submittedPhone = document.createElement('p');
  submittedPhone.textContent = 'Telefon Numaranız: ' + phone;
  submittedDataContainer.appendChild(submittedPhone);

  var submittedGender = document.createElement('p');
  submittedGender.textContent = 'Cinsiyetiniz: ' + gender;
  submittedDataContainer.appendChild(submittedGender);

  var submittedMessage = document.createElement('p');
  submittedMessage.textContent = 'Mesajınız: ' + message;
  submittedDataContainer.appendChild(submittedMessage);

  document.getElementById('ContactForm').style.display = 'none';
  submittedDataContainer.style.display = 'block';
}

function clearForm() {
  document.getElementById('ContactForm').reset();
}
function showErrorMessage(message) {
  Swal.fire({
    icon: 'error',
    title: 'Hata!',
    text: message,
  });
}
