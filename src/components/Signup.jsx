import React from 'react';
import "../App.css";

import { Link } from "react-router-dom";

import firebase from "../firebase.js";

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "",
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        let username = event.target["username"].value;
        let email = event.target["email"].value;
        let password = event.target["password"].value;

        let response = ""

        try {
            response = "Successfully Created Account"
            firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(error.code);
                switch(errorCode) {
                    case 'auth/email-already-in-use':
                        response = "Email is already registered to an account"
                        console.log(response)
                        break;
                    case 'auth/user-not-found':
                        response = "User does not exist with this email"
                        console.log(response)
                        break;
                }
                console.log(error);
            }).then(() => {
                firebase.firestore().collection("accounts").doc(email).set({
                    email: email,
                    username: username,
                });
                this.setState({message: response});
            });
        } catch (err) {
            console.log(err);
        }


    }

    render() {
        return (
            <div className="App">
                <section className="contact section" id="contact">
                    <h2 className="section-title">Sign Up</h2>
                    <div className="Notification">
                        <h1 className="message">{this.state.message}</h1>
                    </div>
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