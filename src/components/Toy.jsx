import React, { useState } from 'react';
import firebase from "../firebase.js";
import '../App.css'


const db = firebase.firestore();

const Toy = (props) => {
  const name = props.match.params.name;

  const [img_url, setImgUrl] = useState("");

  var docRef = db.collection("toys").doc(name);

  docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      setImgUrl(doc.data().img);
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  return (
    <div>
      <center>
        <h2 class="section-title">{name}</h2>
        <img src={img_url} className="toy-img"/>
      </center>

      <section class="contact section" id="contact">
        <h2 class="section-title">Add a Review</h2>

        <div class="review__container bd-grid">
          <form action="" class="review__form">
            <input type="text" placeholder="Name" class="contact__input" />
            <textarea name="Review" placeholder="Message" cols="0" rows="10" class="contact__input"></textarea>
            <input type="button" value="Send" class="contact__button button" />
          </form>
        </div>
      </section>

    </div>
  );
}

export default Toy;