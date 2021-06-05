import React, {useState} from 'react';
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
      <h1>{name}</h1>
      <img src={img_url}/>
    </div>
  );
}

export default Toy;