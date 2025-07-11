import React, { useState, useEffect } from 'react';
import './Register.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
  setIsSubmitted(true);}
}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name field is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem('formData', JSON.stringify(formData));
      setIsSubmitted(true);
    }
  };

  return (
    <section className="registration">
      <div className="reg-left">
        <img src="/left-img.png" alt="Character" />
        <div className="dot h-dot-blue1"></div>
        <div className="dot h-dot-blue2"></div>
        <div className="dot h-dot-blue3"></div>
        <div className="dot h-dot-orange1"></div>
        <div className="dot h-dot-orange2"></div>
        <div className="dot h-dot-lightblue"></div>
        <div className="dot h-dot-purple"></div>
        <div className="dot h-dot-black"></div>
      </div>

      <div className="reg-form">
        {isSubmitted ? (
          <>
            <h2 className='r-title'>Registration</h2>
            <p className="form-desc">
              Hi <span className='r-span'>{JSON.parse(localStorage.getItem('formData')).name}</span>, thanks for registering.
              Somebody will contact you soon.
            </p>
          </>
        ) : (
          <>
            <h2 className='r-title2'>Registration</h2>
            <p className='form-desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
            </p>
            <form onSubmit={handleSubmit} noValidate>
              <label>
            Name<span> * </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </label>

          <label>
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>

          <label>
            Email address<span> * </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>

          <button type="submit">Register</button>

            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Registration;