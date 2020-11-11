import React from 'react';
import '../../App.css';

function Text(props) {
    return (
        <div>
            <p>Üdv, <span id="name">{props.name}</span>!</p>
        </div>
    )   
}

export default Text;
