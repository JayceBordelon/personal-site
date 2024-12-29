import React, { useState } from 'react';
import TypeWriter from '../components/TypeWriter';
import { emailParams } from '../types/email';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    const emailPayload: emailParams = {
      service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAIL_USER_ID,
      template_params: {
        sender: formData.firstName + " " + formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        first: formData.firstName,
        last: formData.lastName
      }
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(emailPayload),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => console.info("Check your email!", res))
    .catch(err => console.error("Error in email emission", err.message));
  };

  return (
    <section id="contact">
      <header>
        <h2><TypeWriter>Get In Touch</TypeWriter></h2>
      </header>
      <form id="form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            placeholder='First Name...'
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder='Last Name...'
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <input
            placeholder='Email...'
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder='Phone'
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <textarea
            placeholder='Leave a message!'
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </section>
  );
}
