import React from 'react';
import useInView from '../hooks/useInView';

function AboutSection() {
    const [contentRef, contentVisible] = useInView({ threshold: 0.1 });
    return (
        <section className="about-section">
            <div ref={contentRef} className={`about-content ${contentVisible ? 'visible' : ''}`}>
                <h1>About Company</h1>
                <div className="info-content">
                    <img
                        className="info-company-photo"
                        src="/assets/images/pexels-shvetsa-5760898.jpg"
                        alt="Our company"
                    />
                    <p>
                        We craft elegant, long-lasting fragrances using the finest natural ingredients.
                        Each scent is a story, a memory, and a statement. Discover your signature perfume today.
                        <br /><br />
                        Our perfumes are designed to evoke emotions and leave a lasting impression. With a deep
                        commitment to quality and artistry, we blend tradition and innovation to create scents
                        that are as unique as you are. Experience the essence of luxury in every bottle.
                    </p>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=MonteCarlo&family=Unna:ital,wght@0,400;0,700;1,400;1,700&display=swap');
                    </style>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
