import React from 'react';
import "../App.css";
import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'

import {
    Link
} from "react-router-dom";

import firebase from "../firebase.js";

const db = firebase.firestore();



class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toys: [],
        }

    }

    componentDidMount() {

        db.collection("toys")
            .onSnapshot((querySnapshot) => {
                let docs = this.state.toys;
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
                })
                this.setState({})
            })
    }


    render() {
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
                <div className="home__data">
                    <h1 className = "head">
                        Toy Reviews
                    </h1>
                    <br></br>
                    <h4>
                        See what kids have to say about various toy products
                    </h4>
                </div>
                <div className="ToyList">
                    <ul className="list">
                        {
                            this.state.toys.map(toy => {
                                return (
                                    <Link to={"/toy/" + toy.id}>
                                        <li className="liList">
                                            <h5>{toy.name}</h5>
                                            <img src={toy.img} className="post-img" />
                                        </li>
                                    </Link>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;