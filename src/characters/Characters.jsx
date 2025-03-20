import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './characters.scss';

const Characters = () => {
    const [data, setData] = useState([]);
    const [ids, setIds] = useState([1, 2, 3, 4, 5, 6]);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all(ids.map(id => axios.get(`https://rickandmortyapi.com/api/character/${id}`)))
            .then(responses => {
                setData(responses.map(res => res.data));
            })
            .catch(() => setData([]));
    }, [ids]);

    const handleNavigation = (url) => {
        const id = url.split('/').pop();
        navigate(`/location/${id}`);
    };

    return (
        <div className="container characters">
            <div className="characters-flex">
                {data.map(character => (
                    <div key={character.id} className="characters-card">
                        <img src={character.image} alt={character.name} className="characters-image" />
                        <div className="characters-info">
                            <h3 
                                className="characters-name clickable" 
                                onClick={() => navigate(`/character/${character.id}`)}
                            >
                                {character.name}
                            </h3>
                            <p className="characters-status">
                                <span>{character.status} - {character.species}</span>
                            </p>
                            <p>
                                <strong>Last known location:</strong>
                                <span 
                                    className="clickable" 
                                    onClick={() => handleNavigation(character.location.url)}
                                >
                                    {character.location.name}
                                </span>
                            </p>
                            <p>
                                <strong>First seen in:</strong>
                                <span 
                                    className="clickable" 
                                    onClick={() => handleNavigation(character.origin.url)}
                                >
                                    {character.origin.name}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Characters;
