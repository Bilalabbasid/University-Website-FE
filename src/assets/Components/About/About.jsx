import React from 'react';
import aboutImg from '../about.png';
import playIcon from '../play-icon.png';
import './About.css';

const About = ({ setPlayState }) => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={aboutImg} alt="University Campus" className='about-img'/>
                <img 
                    src={playIcon} 
                    alt="Play Video" 
                    className='play-icon'
                    onClick={() => setPlayState(true)}
                />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Shaping Leaders for Tomorrow</h2>
                <p>
                    We offer a wide range of undergraduate, graduate, and professional programs designed to challenge and inspire. 
                    Our faculty members are distinguished scholars and practitioners in their fields, bringing a wealth of knowledge and real-world experience to the classroom. 
                    Our cutting-edge research facilities and numerous research opportunities allow students to engage in innovative projects that push the boundaries of knowledge and address pressing global issues.
                </p>
                <p>
                    Our campus is a hub of activity and learning. The picturesque campus features state-of-the-art facilities, including modern classrooms, advanced laboratories, a comprehensive library, and recreational amenities. 
                    Our diverse student body brings a rich tapestry of cultures and perspectives, fostering a dynamic and inclusive community. 
                    Students can participate in a wide array of extracurricular activities, from academic clubs and student organizations to sports and arts, ensuring a well-rounded university experience.
                </p>
                <p>
                    We offer a wealth of international opportunities to prepare our students for a globalized world. 
                    Our study abroad programs, international research collaborations, and cultural exchange initiatives provide students with invaluable experiences and a broader perspective.
                </p>
            </div>
        </div>
    );
};

export default About;
