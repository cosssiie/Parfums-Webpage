import React, { useEffect, useState } from 'react';
import PerfumeCard from './PerfumeCard';
import perfumesData from '../data/perfumes.json';

function PerfumeSection() {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        setPerfumes(perfumesData);
    }, []);

    return (
        <section className="perfume-section">
            <h1>Our Collection</h1>
            <div className="perfume-grid">
                {perfumes.map(perfume => (
                    <PerfumeCard key={perfume.id} perfume={perfume} />
                ))}
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap');
            </style>
        </section>
    );
}

export default PerfumeSection;
