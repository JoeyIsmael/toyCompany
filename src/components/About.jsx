import React from 'react';
import "../App.css";

function About() {
    return (
        <div className="App">
            <div className="about-section">
                <div className="inner-container">
                    <h2 className="section-title">About Us</h2>
                    <p className="text">
                    We founded Kids Rate Toys to make finding the right toy easier with kids' reviews!

                    KRT started as a group of friends who are passionate about toys. It was hard to find proper toys because it takes time to do research when faced with many options. Furthermore, most existing reviews are by adults.

                    Our analyses are different because kids are end-users of toys, and our videos are first-hand experiences! We make video and written reviews by playing with the toys and comparing them. Behind each comparison is a combination of carefully selecting, testing, collating, and editing! All the work put into the reviews makes them trustworthy and high-quality!

                    </p>
                    <div className="skills">
                        <span>Product Reviews</span>
                        <span>Replies</span>
                        <span>100% Kid-Run</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;