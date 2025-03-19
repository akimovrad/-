import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const CharacterDetails = () => {
    const { id } = useParams(); 
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                setCharacter(response.data);
            })
            .catch(() => {
                setCharacter(null);
            });
    }, [id]);

    if (!character) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Last known location:</strong> {character.location.name}</p>
            <p><strong>First seen in:</strong> {character.origin.name}</p>
        </div>
    );
};

export default CharacterDetails;
