import '../App.css';
import Card from './Card';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [characters, setCharacters] = useState([
        {
            name: 'Darth Vader',
            link: 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960',
            clicked: false,
        },

        {
            name: 'Leia Organa',
            link: 'https://s3.amazonaws.com/libapps/accounts/81381/images/leia.jpg',
            clicked: false,
        },
        {
            name: 'Boba Fett',
            link: '',
            clicked: false,
        },
    ]);

    const [score, setScore] = useState(0);

    useEffect(() => {
        characters.sort(() => Math.random() - 0.5);
    }, [characters]);

    function clickCharacter(event) {
        const newCharacters = characters.map(chars => {
            if (chars.link === event.target.src) {
                chars.clicked = true;
            }
            return chars;
        });
        setCharacters(newCharacters);
    }
    return (
        <div className='container'>
            <div>
                <label>Container for header</label>
            </div>

            <div className='card-container'>
                {characters.map((chars, id) => {
                    return (
                        <Card
                            key={id}
                            name={chars.name}
                            link={chars.link}
                            onClick={clickCharacter}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default App;
