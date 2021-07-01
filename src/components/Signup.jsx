import React from 'react';
import "../App.css";

import { Link } from "react-router-dom";

import firebase from "../firebase.js";

class SignUp extends React.Component {

    submitHandler = (event) => {
        event.preventDefault();
        let username = event.target["username"].value;
        let email = event.target["email"].value;
        let password = event.target["password"].value;

        try {
            firebase.auth().createUserWithEmailAndPassword(email, password);
            firebase.firestore().collection("accounts").doc(email).set({
                email: email,
                username: username,
            });
            this.props.history.push('/home');
        } catch (err) {
            console.log(err);
        }


    }

    render() {
        return (
            <div className="App">
                <section className="contact section" id="contact">
                    <h2 className="section-title">Sign Up</h2>
                    <div className="review__container bd-grid">
                        <form onSubmit={this.submitHandler} action="" className="review__form">
                            <input type="text" name="username" placeholder="Username" className="contact__input" />
                            <input type="email" name="email" placeholder="Email" className="contact__input" />
                            <input type="password" name="password" placeholder="Password" className="contact__input" />
                            <h6>* passwords must be more than 6 characters</h6>
                            <input type="submit" value="Sign Up" className="contact__button button" />
                        </form>
                        <Link to="/login">Already have an Account? Login</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default SignUp;