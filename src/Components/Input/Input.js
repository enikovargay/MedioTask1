import React, {useState} from 'react';
import '../../App.css';
import Text from '../Text/Text';

function Input() {
    const [name, setName] = useState('');
    const myName = name;

    const [text, setText] = useState('');

    function handleChange() {
        setText(myName);
    }

    return (
        <div>
            <Text name={text} />
            <input type="text" placeholder="Név" onChange={e => setName(e.target.value)} />
            <button onClick={handleChange}>Küldés</button>
        </div>
    )
}

export default Input;
