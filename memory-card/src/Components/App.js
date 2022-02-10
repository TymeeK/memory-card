import '../App.css';
import Card from './Card';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [characters, setCharacters] = useState([]);

    const getDataAsync = async function () {
        const response = await fetch('./data.json');
        const json = await response.json();
        setCharacters(json);
    };

    useEffect(() => {
        getDataAsync();
    }, []);

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
                    if (id > 3) {
                        return null;
                    }
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
