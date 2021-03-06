import React from 'react';
import "../App.css";

import { Link } from "react-router-dom";

import firebase from "../firebase.js";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "",
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        let email = event.target["email"].value;
        let password = event.target["password"].value;

        let response = ""

        try {
            response = "Successfully Signed In"
            firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(error.code);
                if (errorCode === 'auth/wrong-password') {
                    response = "Password or Email is wrong"
                    console.log(response)
                }
                switch(errorCode) {
                    case 'auth/wrong-password':
                        response = "Password or Email is wrong"
                        console.log(response)
                        break;
                    case 'auth/user-not-found':
                        response = "User does not exist with this email"
                        console.log(response)
                        break;
                }
                console.log(error);
            }).then(() => {
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
                    <h2 className="section-title">Login</h2>
                    <div className="Notification">
                        <h1 className="message">{this.state.message}</h1>
                    </div>
                    <div className="review__container bd-grid">
                        <form onSubmit={this.submitHandler} action="" className="review__form">
                            <input type="email" name="email" placeholder="Email" className="contact__input" />
                            <input type="password" name="password" placeholder="Password" className="contact__input" />
                            <input type="submit" value="Login" className="contact__button button" />
                        </form>
                        <Link to="/signup">Don't have an Account? Sign Up</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default Login;