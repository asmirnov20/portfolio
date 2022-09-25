import { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setIsLoading(false);
        setIsFormSubmitted(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Chat with me</h2>

      <div className="app__footer-cards">

        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:smirnov.andrii1@gmail.com" className="p-text">
            smirnov.andrii1@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+38 068 154 34 87" className="p-text">+38 068 154 34 87</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form">
          <div>
            <input
              className="p-text"
              type="text"
              placeholder="Your name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message..."
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
          >{!isLoading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      )
        : (
          <div>
            <h3 className="head-text">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact',
  'app__primarybg',
);