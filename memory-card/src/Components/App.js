import '../App.css';
import Card from './Card';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [score, setScore] = useState(0);

    const getData = async function () {
        const response = await fetch('./data.json');
        const json = await response.json();
        setCharacters(json);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        characters.sort(() => Math.random() - 0.5);
    }, [characters]);

    async function clickCharacter(event) {
        let noDuplicates = true;

        const newCharacters = characters.map(chars => {
            if (chars.link === event.target.src && !chars.clicked) {
                setScore(score + 1);
                chars.clicked = true;
            } else if (chars.link === event.target.src && chars.clicked) {
                setScore(0);
                noDuplicates = false;
            }
            return chars;
        });
        if (noDuplicates) {
            setCharacters(newCharacters);
        } else {
            getData();
        }
    }

    return (
        <div className='container'>
            <div className='header-container'>
                <label htmlFor=''>Score {score}</label>
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
