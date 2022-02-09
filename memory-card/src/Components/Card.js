import React, { useState, useEffect } from 'react';

const Card = props => {
    const { character, setCharacter } = useState(props);

    return (
        <div>
            <img src={props.link} alt={props.name} onClick={props.onClick} />
        </div>
    );
};

export default Card;
