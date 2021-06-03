import React, { useState } from 'react';

import '../App.css'

const Toy = (props) => {
    const name = useState(props.match.params.name);
  return (
    <div>
        <h1>Test</h1>
        <h1>{props.match.params.name}</h1>
    </div>
  );
}

export default Toy;