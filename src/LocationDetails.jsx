import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './LocationDetails.scss'

const LocationDetails = () => {
    const { id } = useParams(); 
    const [location, setLocation] = useState(null);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(response => {
                setLocation(response.data);
            })
            .catch(() => {
                setLocation(null);
            });
    }, [id]);

    if (!location) {
        return <p>Loading...</p>;
    }

    return (
        <div className="location">
            <h2>{location.name}</h2>
            <p><strong>Type:</strong> {location.type}</p>
            <p><strong>Dimension:</strong> {location.dimension}</p>
            <p><strong>Residents:</strong> {location.residents.length}</p>
        </div>
    );
};

export default LocationDetails;
