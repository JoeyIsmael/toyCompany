import React from 'react';
import "../App.css";

function Contact() {
    return (
        <div className="App">
            <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form action="" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input"/>
                        <input type="mail" placeholder="Email" className="contact__input"/>
                        <textarea name="message" placeholder="Message" cols="0" rows="10" className="contact__input"></textarea>
                        <input type="button" value="Send" className="contact__button button"/>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;