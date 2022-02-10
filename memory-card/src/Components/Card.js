import React, { useState, useEffect } from 'react';
import '../Styling/Card.css';

const Card = props => {
    const { character, setCharacter } = useState(props);

    return (
        <div className='img-container'>
            <img src={props.link} alt={props.name} onClick={props.onClick} />
        </div>
    );
};

export default Card;
