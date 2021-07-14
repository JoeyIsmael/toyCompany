import React from 'react';
import "../App.css";
import firebase from 'firebase';

const db = firebase.firestore();


class Create extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ""
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        let message = event.target["desc"].value;
        let name = event.target["name"].value;
        let url = event.target["url"].value;

        this.setState({ message: "" })
        db.collection("toys").doc(name).set({
            name: name,
            message: message,
            url: url,
        })

        this.setState({ message: "Successfully Created Post" })
    }

    render() {
        return (
            <div className="App">
                <div className="create-section">
                    <h2 className="section-title">Create</h2>
                    <p className="text2">
                        Do you have a review for a product that is not currently listed on the home page?

                        Fill out the following forum to create a page for a new product to be listed where you can be the first to review it.
                    </p>

                    <section className="contact section" id="contact">
                        <h2 className="section-title">Add a Toy</h2>

                        <h4>{this.state.message}</h4>

                        <div className="review__container bd-grid">
                            <form onSubmit={this.submitHandler} action="" className="review__form">
                                <textarea name="name" placeholder="Name" cols="0" rows="1" className="contact__input"></textarea>
                                <textarea name="url" placeholder="Image Url" cols="0" rows="1" className="contact__input"></textarea>
                                <textarea name="desc" placeholder="Short Description" cols="0" rows="10" className="contact__input"></textarea>
                                <input type="submit" value="Send" className="contact__button button" />
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Create;