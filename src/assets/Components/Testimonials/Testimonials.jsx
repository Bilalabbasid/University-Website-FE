import React, { useRef } from 'react';

import nextIcon from '../next-icon.png';
import backIcon from '../back-icon.png';
import user1 from '../user-1.png';
import user2 from '../user-2.png';
import user3 from '../user-3.png';
import user4 from '../user-4.png';
import './Testimonials.css';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
      if (tx > -75) { 
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
      if (tx < 0) {
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
      <div className='testimonials'>
        <img src={nextIcon} alt="Next" className='next-btn' onClick={slideForward} />
        <img src={backIcon} alt="Back" className='back-btn' onClick={slideBackward} />
        <div className="slider">
          <ul ref={slider}>
            <li className="slide">
              <div className="user-info">
                <img src={user1} alt="User 1" />
              </div>
              <h3>Maria Dickson</h3>
              <span>Notion Gate, USA</span>
              <p>
                My time at Nova Tech University was transformative. The dedicated faculty and innovative curriculum provided me with hands-on experience in my field. The collaborative atmosphere among students and the extensive network of alumni support were crucial in helping me land my dream job right after graduation. Nova Tech truly fosters both personal and professional growth.
              </p>
            </li>
            <li className="slide">
              <div className="user-info">
                <img src={user2} alt="User 2" />
              </div>
              <h3>John Doe</h3>
              <span>Innovate Ltd, UK</span>
              <p>
                Attending Nova Tech University was a game-changer for me. The professors were not only experts in their fields but also genuinely invested in our success. The state-of-the-art facilities and rich array of extracurricular activities helped me develop both academically and personally. I graduated with confidence and a clear path forward in my career.
              </p>
            </li>
            <li className="slide">
              <div className="user-info">
                <img src={user3} alt="User 3" />
              </div>
              <h3>Jane Smith</h3>
              <span>Creative Co, Canada</span>
              <p>
                Studying at Nova Tech University was an incredible experience. The blend of rigorous academics and a supportive community created an environment where I thrived. The emphasis on practical, real-world applications of what we learned, combined with opportunities for research and internships, gave me a strong foundation for my future career.
              </p>
            </li>
            <li className="slide">
              <div className="user-info">
                <img src={user4} alt="User 4" />
              </div>
              <h3>Paul Walker</h3>
              <span>Tech Solutions, Australia</span>
              <p>
                The experience at Nova Tech University exceeded my expectations. The small class sizes and personalized attention from professors made a huge difference in my learning. Beyond academics, the vibrant campus life and diverse student body enriched my university years, making them some of the most rewarding and memorable of my life.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Testimonials;
