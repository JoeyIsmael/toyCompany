import React from 'react';
import firebase from "../firebase.js";
import '../App.css'

import Review from "./Review.jsx";

const db = firebase.firestore();

class Toy extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      header: "",
      name: this.props.match.params.name,
      img_url: "",
      title: "",
      reviews: []
    }
  }

  componentDidMount() {


    var docRef = db.collection("toys").doc(this.state.name);

    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        this.setState({header: doc.data().name})
        this.setState({ img_url: doc.data().img })
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });

    db.collection("toys").doc(this.state.name).collection("reviews")
      .onSnapshot((querySnapshot) => {
        let docs = this.state.reviews;
        querySnapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            let doc = change.doc;
            docs.push(doc.id);
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

  submitHandler = (event) => {
    event.preventDefault();
    let message = event.target["Master"].value;

    db.collection("toys").doc(this.state.name).collection("reviews").add({
      message: message,
      date: new Date().toString(),
    })
  }


  render() {
    return (
      <div>
        <center>
          <h2 className="section-title">{this.state.name}</h2>
          <div className="toyheader">
            <h2>{this.state.header}</h2>
          </div>
          <img src={this.state.img_url} className="toy-img" />
        </center>

        <section className="contact section" id="contact">
          <h2 className="section-title">Add a Review</h2>

          <div className="review__container bd-grid">
            <form onSubmit={this.submitHandler} action="" className="review__form">
              <textarea name="Master" placeholder="Message" cols="0" rows="10" className="contact__input"></textarea>
              <input type="submit" value="Send" className="contact__button button" />
            </form>
          </div>
        </section>

        <div className="reviews">
          <ul className="review-list">
            {
              this.state.reviews.map(review => {
                return (
                  <Review toy={this.state.name} id={review}/>
                );
              })
            }
          </ul>
        </div>

      </div>
    );
  }
}

export default Toy;