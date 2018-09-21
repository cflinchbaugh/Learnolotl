import React from 'react';

function About (props) {
    return (
        <div className='mdCard'>
            <p>Version: BETA</p>
            <p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/cflinchbaugh/level-up">GitHub Repo</a>
            </p>
            <p>
                A passion project built primarily to assist with my own study of the Japanese language, but designed to be flexible and practical for several learning use-cases.<br/><br/>

                GitHub description: "A flexible, JSON-eating study-aid application, great for language learning and other memorization-based studying."<br/><br/>

                Built with ReactJS. Conceived, designed, architected, and implemented by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopher-flinchbaugh/">me</a>.<br/><br/>
            </p>
        </div>
    );
}

export default About;