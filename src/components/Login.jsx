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

        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
            this.setState({message: "Success"})
        } catch (err) {
            console.log(err);
        }


    }

    render() {
        return (
            <div className="App">
                <h1 className="message">{this.state.message}</h1>
                <section className="contact section" id="contact">
                    <h2 className="section-title">Login</h2>
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