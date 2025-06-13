import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
/* Validate email format using regex */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
    } else if (!validateEmail(formData.email)) {
      setError('Please enter a valid email.');
    } else {
      setError('');
      alert("Message submitted!");
      setFormData({ name: '', email: '', message: '' });
    }
  };
/* Handle form submission, validate fields, and reset form */
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>{/* Contact Section Heading */}
      <form onSubmit={handleSubmit}>{/* Contact Form */}
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
