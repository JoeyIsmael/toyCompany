import React from 'react';
import "../App.css";
import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'

function Home() {
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

            </div>
        </div>
    );
}

export default Home;