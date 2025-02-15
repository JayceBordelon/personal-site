import React, { useState } from 'react';
import TypeWriter from '../components/TypeWriter';
import { emailParams } from '../types/email';
import FloatingInView from '../components/FloatingInView';
import { openLinkInNewTab } from '../functions/helpers';

export default function Contact() {
  const UNSENT: string = 'unsent';
  const SENT: string = 'sent';
  const SENDING: string = 'sending';
  const ERROR: string = 'error';
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [emailState, setEmailState] = useState<string>(UNSENT);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailState(SENDING);
    console.log('Form Submitted:', formData);
    const emailPayload: emailParams = {
      service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAIL_USER_ID,
      template_params: {
        sender: formData.firstName + ' ' + formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        first: formData.firstName,
        last: formData.lastName,
      },
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(emailPayload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => setEmailState(SENT))
      .catch(() => setEmailState(ERROR));
  };

  return (
    <section id="contact">
      <header>
        <h2>
          <TypeWriter>Get In Touch</TypeWriter>
        </h2>
      </header>
      <form id="form" onSubmit={handleSubmit}>
        {emailState === UNSENT && (
          <>
            <FloatingInView threshold={0.2}>
              <div className="field">
                <input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </FloatingInView>
            <FloatingInView threshold={0.2}>
              <div className="field">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </FloatingInView>
            <FloatingInView threshold={0.2}>
              <div className="field">
                <textarea
                  placeholder="You can leave this blank if you want!"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </FloatingInView>
            <button type="submit">Send Email</button>
          </>
        )}
        {emailState === SENDING && (
          <FloatingInView>
            <h3>Sending...</h3>
          </FloatingInView>
        )}
        {emailState === ERROR && (
          <FloatingInView threshold={0.2}>
            <div
              onClick={() => openLinkInNewTab('mailto:b.jayce@wustl.edu')}
              className="error-text"
            >
              There was an issue sending your mail at this time. Try reaching me at
              b.jayce@wustl.edu. Sorry for the inconvinience
            </div>{' '}
          </FloatingInView>
        )}
        {emailState === SENT && (
          <FloatingInView threshold={0.2}>
            <div className="success-text">Check your email!!</div>{' '}
          </FloatingInView>
        )}
      </form>
    </section>
  );
}
