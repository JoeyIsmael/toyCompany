import React from 'react';
import "../App.css";

function Contact() {
    return (
        <div className="App">
            <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <form action="" class="contact__form">
                        <input type="text" placeholder="Name" class="contact__input"/>
                        <input type="mail" placeholder="Email" class="contact__input"/>
                        <textarea name="message" placeholder="Message" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="button" value="Send" class="contact__button button"/>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;