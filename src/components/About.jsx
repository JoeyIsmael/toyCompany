import React from 'react';
import "../App.css";

function About() {
    return (
        <div className="App">
            <div className="about-section">
                <div className="inner-container">
                    <h2 className="section-title">About Us</h2>
                    <p className="text">
                        We love toys! Kids Rate Toys is a 100% kid-run business that reviews kids' toys from a kid's perspective.
                        We are different from other companies that review or advertise toys because kids know toys better than any adult.
                        Kids Rate Toys started as a group of friends - our parents and many of us used Amazon and other businesses that sold toys. One of our parents even sold toys on Amazon!
                        However, many of the reviews were by adults and were not the true thoughts kids have about toys.
                        Thus, we founded Kids Rate Toys to give honest reviews of toys from a kid's perspective.
                        On our website kidsratetoys.com, we post daily videos and reviews of toys!
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