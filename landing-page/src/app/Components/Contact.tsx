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
      <meta name="keywords" content="contact, email, finwheel, customer service, relations, public, certified financial planner, chartered financial planner, financial advisor, certified financial advisor, chartered financial advisor, lplfinancial, lpl fin, wells fargo advisors llc, financial advisors near me, financial planner, personal financial advisor near me, financial planner near me, certified financial manager, investment advisor, morgan stanley financial advisors, retirement financial planner, financial advisor income, salaried financial advisor, financial planning retirement planner, personal financial specialist, fiduciary financial advisor, financial consultant, fiduciary investment advisor, financial advisor for athletes, best financial advisors
,robo financial advisors, robo advisor investment, invest with a robo advisor, robo advisor stock, robo investing platform, robo advisor platform, automated financial advisor, best robo financial advisors, automated financial advice, best robo financial advisor, robo advisor company, robo advisor portfolio, hybrid robo advisors, best robo advisor 2022, investing with robo advisor, robo investment account, best robo advisor accounts, best robo advisor ira, robo investing companies, investing with robo advisors, robo advisor personal capital, robo advisor for investing, wealth management robo advisor, invest in robo advisor, robo advisor trading
" />
      <div className="container mx-auto flex flex-col items-center gap-4">
        <meta name="keywords" content="contact, email, finwheel, customer service, relations, public" />
        <SectionTitle
            title="Contact Us"
            description="Got a question? Ask us down here and we will get back to you!"
            />
        <h4>Email: <a href="mailto:customer-service@finwheel.tech" target="_blank">customer-service@finwheel.tech</a></h4>
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

/*
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
*/
