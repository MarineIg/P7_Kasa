import React from 'react';
import { useParams } from 'react-router-dom';

const Locations = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>Page Location</h1>

        </div>
    );
};

export default Locations;