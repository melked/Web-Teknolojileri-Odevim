import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !gender || !message) {
      alert('Lütfen tüm alanları doldurun');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Geçerli bir e-posta adresi girin');
      return;
    }

    if (!isValidPhone(phone)) {
      alert('Telefon numaranız 11 haneli olmalıdır');
      return;
    }

    setSubmitted(true);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^\d{11}$/.test(phone);
  };

  const handleClearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setGender('');
    setMessage('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div>
        <h2>Gönderilen Bilgiler</h2>
        <p>Adınız: {name}</p>
        <p>E-posta Adresiniz: {email}</p>
        <p>Telefon Numaranız: {phone}</p>
        <p>Cinsiyetiniz: {gender}</p>
        <p>Mesajınız: {message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>İletişim Sayfası</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Adınız:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">E-posta Adresiniz:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Telefon Numaranız:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="gender">Cinsiyetiniz:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Seçiniz</option>
          <option value="erkek">Erkek</option>
          <option value="kadın">Kadın</option>
          <option value="diğer">Diğer</option>
        </select>

        <label htmlFor="message">Mesajınız:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Gönder</button>
        <button type="button" onClick={handleClearForm}>
          Temizle
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
