import React, { useState } from 'react';

function PerfumeCard({ perfume }) {
    const [selectedVolume, setSelectedVolume] = useState('50ml');

    return (
        <div className="perfume-card">
            <img src={perfume.image} alt={perfume.name} />
            <h3>{perfume.name}</h3>
            
            <select value={selectedVolume} onChange={(e) => setSelectedVolume(e.target.value)}>
                {Object.keys(perfume.prices).map(volume => (
                    <option key={volume} value={volume}>{volume}</option>
                ))}
            </select>

            <p className="price">${perfume.prices[selectedVolume]}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default PerfumeCard;
