import React, {useState} from 'react';

import styles from './Square.module.css';

export default function Square() {
    const [value, setValue] = useState('');
    
    function handleClick() {
        setValue('X')
    }
    
    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

