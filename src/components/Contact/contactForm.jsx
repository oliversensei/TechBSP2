import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const [errors, setErrors] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.Name) {
      newErrors.Name = 'Name is required';
      isValid = false;
    }

    if (!formData.Email) {
      newErrors.Email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.Message) {
      newErrors.Message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true); 
      const scriptURL = 'https://script.google.com/macros/s/AKfycbw0Ho1dHpRAJAusY83MT9h9935m4MCMU8ThaXWZC2mzJRJBWHqpuF1XUIkgMN2L411a/exec';

      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(formRef.current),
        });

        if (response.ok) {
          toast.success('Successfully Sent!', {
            autoClose: 3000,
          });

          setFormData({
            Name: '',
            Email: '',
            Subject: '',
            Message: '',
          });
          setErrors({});
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        toast.error('Error submitting form. Please try again.', {
          autoClose: 3000,
        });
        console.error('Error!', error.message);
      } finally {
        setIsSubmitting(false); 
      }
    }
  };

  return (
    <div className="contact-form max-w-lg mx-auto p-4">
      <h3 className="title-large text-2xl font-bold mb-4">Let’s Work Together.</h3>
      
      {/* Loading Bar */}
      {isSubmitting && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="input-wrapper space-y-4"
        name="submit-to-google-sheet"
      >
        <div className="input-field-wrapper">
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Name*"
            className="input-field w-full p-2 border rounded-md"
            disabled={isSubmitting} // Disable input during submission
          />
          {errors.Name && <p className="error text-red-500 text-sm mt-1">{errors.Name}</p>}
        </div>

        <div className="input-field-wrapper">
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Email*"
            className="input-field w-full p-2 border rounded-md"
            disabled={isSubmitting}
          />
          {errors.Email && <p className="error text-red-500 text-sm mt-1">{errors.Email}</p>}
        </div>

        <div className="input-field-wrapper">
          <input
            type="text"
            name="Subject"
            value={formData.Subject}
            onChange={handleChange}
            placeholder="Subject"
            className="input-field w-full p-2 border rounded-md"
            disabled={isSubmitting}
          />
        </div>

        <div className="input-field-wrapper">
          <textarea
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            placeholder="Message*"
            className="textarea w-full p-2 border rounded-md h-32"
            disabled={isSubmitting}
          ></textarea>
          {errors.Message && <p className="error text-red-500 text-sm mt-1">{errors.Message}</p>}
        </div>

        <button
          className="btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          type="submit"
          disabled={isSubmitting} 
        >
          <span className="label-large">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <div className="state-layer"></div>
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;