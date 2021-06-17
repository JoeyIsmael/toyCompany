import React, { useState } from 'react';
import "../App.css";
import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'

import firebase from "../firebase.js";

const db = firebase.firestore();

const renderPosts = (props) => {
    const posts = props;
    if(posts.length > 0) {
        posts.map(post => {
            return (
                <p>{post.name}</p>
            )
        })
    }
}

function Home() {

    // const [toys, setToys] = useState([]);

    // db.collection('toys').get().then(snapshot => {
    //     snapshot.docs.map(doc => setToys(...toys, doc.data()));
    //     console.log(toys)
    // })

    return (
        <div className="App">
            <div className="Banner">
                <div className="title1">
                    <h1 className="title2">Looking for a Toy Product Review?</h1>
                    <InputGroup>
                        <Input className="searchbar" placeholder="Find a Toy" />
                        <InputGroupAddon addonType="prepend"><Button>Search</Button></InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
            <div className="List">
                <h1>
                    Toy Reviews
                </h1>
                <br></br>
                <h4>
                    See what kids have to say about various toy products
                </h4>
            </div>
            <div className="ToyList">
                {/* {renderPosts(toys)} */}
            </div>
        </div>
    );
}

export default Home;