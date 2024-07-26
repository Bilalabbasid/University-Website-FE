import React, { useState } from 'react';
import message_icon from '../msg-icon.png';
import mail_icon from '../mail-icon.png';
import phone_icon from '../phone-icon.png';
import location_icon from '../location-icon.png';
import white_arrow from '../white-arrow.png';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3628e300-e368-4097-9eec-ac7341550909");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="Message Icon" /></h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Mail Icon" />premium2225215@gmail.com</li>
          <li><img src={phone_icon} alt="Phone Icon" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="Location Icon" />77 Massachusetts Ave, Cambridge<br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
          <label>Write Your Message Here</label>
          <textarea name="message" rows="1" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="White Arrow Icon" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
