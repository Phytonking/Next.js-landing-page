"use client";
import React, { useState } from 'react';
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";
import axios from 'axios';
/*
interface ContactFormProps {
  onSubmit: (formData: FormData) => {
    console.log(FormData);
  };
}
*/
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
    /*
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (formData: FormData) => {
    //e.preventDefault();
    //onSubmit(formData);
    const response = await axios.post('http://your-django-server-url/submit-form/', formData);
      if (response.data.status === 'success') {
        console.log('Form submitted successfully:', formData);
      } else {
        console.error('Form submission failed');
      }
    // Optionally, clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
    */
  return (
    <section id="contact" className="w-full px-4 py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <SectionTitle
            title="Contact Us"
            description="Got a question? Ask us down here and we will get back to you!"
            />
            <form action="http://your-django-server-url/submit-form/" style={formStyle} method="post">
                <div style={formGroup}>
                    <label htmlFor="name" style={labelStyle}>Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    //value={formData.name}
                    //onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder=" your name"
                    />
                </div>
                <div style={formGroup}>
                    <label htmlFor="email" style={labelStyle}>Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    //value={formData.email}
                    //onChange={handleChange}
                    placeholder=" your email"
                    style={inputStyle}
                    required
                    />
                </div>
                <div style={formGroup}>
                    <label htmlFor="message" style={labelStyle}>Message:</label>
                    <textarea
                    id="message"
                    name="message"
                    //value={formData.message}
                    //onChange={handleChange}
                    placeholder=" your message"
                    style={inputStyle}
                    required
                    />
                </div>
                <button type="submit" style={submitButtonStyle}>Submit</button>
            </form>
      </div>
    </section> 
  );
};

// Inline styles
const formStyle: React.CSSProperties = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };
  
  const formGroup: React.CSSProperties = {
    marginBottom: '15px',
  };
  
  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };
  
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  
  const textareaStyle: React.CSSProperties = {
    minHeight: '100px',
  };
  
  const submitButtonStyle: React.CSSProperties = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

export default ContactForm;
