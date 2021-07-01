import React from 'react';
import firebase from "../firebase.js";
import '../App.css'


const db = firebase.firestore();

class Review extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            post: this.props.toy,
            id: this.props.id,
            message: "",
            date: "",
            open: false,
            reviews: []
        }
    }

    componentDidMount() {


        var docRef = db.collection("toys").doc(this.state.post).collection("reviews").doc(this.props.id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                this.setState({ message: doc.data().message })
                this.setState({ date: doc.data().date })
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        db.collection("toys").doc(this.state.post).collection("reviews").doc(this.state.id).collection("reviews")
            .onSnapshot((querySnapshot) => {
                let docs = this.state.reviews;
                querySnapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        let doc = change.doc;
                        docs.push(doc.data());
                    } else if (change.type === 'removed') {
                        let doc = change.doc;
                        for (var i = 0; i < docs.length; i++) {
                            if (docs[i].getId() === doc.id) {
                                docs.splice(i, 1);
                            }
                        }
                    } else if (change.type === 'modified') {
                        let doc = change.doc;
                        for (let i = 0; i < docs.length; i++) {
                            if (docs[i].getId() === doc.id) {
                                docs.splice(i, 1, doc);
                            }
                        }
                    }
                    this.setState({})
                })
            })
    }

    toggleReply = () => {
        this.setState({ open: !this.state.open });
    }

    submitHandler = (event) => {
        event.preventDefault();
        let message = event.target["Reply"].value;

        db.collection("toys").doc(this.state.post).collection("reviews").doc(this.state.id).collection("reviews").add({
            message: message,
            date: new Date().toString(),
        })
    }


    render() {

        let reply = (
            <button onClick={this.toggleReply}>Reply</button>
        )

        if (this.state.open) {
            reply = (
                <div className="reply">

                    <button onClick={this.toggleReply}>Reply</button>
                    <section className="contact section" id="contact">
                        <h2 className="section-title">Reply</h2>

                        <div className="review__container bd-grid">
                            <form onSubmit={this.submitHandler} action="" className="review__form">
                                <textarea name="Reply" placeholder="Message" cols="0" rows="10" className="contact__input"></textarea>
                                <input type="submit" value="Send" className="contact__button button" />
                            </form>
                        </div>
                    </section>
                </div>
            )
        }

        return (
            // <div>
            //     <center>
            //         <h2 className="section-title">{this.state.name}</h2>
            //         <img src={this.state.img_url} className="toy-img" />
            //     </center>
            // </div>

            <li className="review">
                <h6>{this.state.date}</h6>
                <h3>{this.state.message}</h3>

                {reply}



                <div className="reviews">
                    <ul className="review-list">
                        {
                            this.state.reviews.map(review => {
                                return (
                                    <li className="review">
                                        <h6>{review.date}</h6>
                                        <h3>{review.message}</h3>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </li>
        );
    }
}

export default Review;