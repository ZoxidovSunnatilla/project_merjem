import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_upxaw5n',   // EmailJS servisi orqali olingan service ID
      'template_w7gghws',  // EmailJS servisi orqali olingan template ID
      formData,
      'yrUfuBAf4uw2NEnLG'       // EmailJS servisi orqali olingan user ID
    )
    .then((result) => {
      alert('Email muvaffaqiyatli yuborildi!');
    }, (error) => {
      alert('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Ismingiz" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email manzilingiz" value={formData.email} onChange={handleChange} />
      <textarea name="message" placeholder="Xabar" value={formData.message} onChange={handleChange}></textarea>
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default ContactForm;