import React from 'react';

const DescriptionSection = ({ fullDescription }) => {
    if (!fullDescription) return null;

    const paragraphs = typeof fullDescription === 'string'
        ? fullDescription.split('\n').filter(p => p.trim() !== '')
        : (fullDescription.paragraphs || []);

    return (
        <div className="product-section description-section">
            <h2 className="product-section-title">Descripción</h2>
            <div className="description-content">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-3">{paragraph}</p>
                    ))}
            </div>
        </div>
    );
};

export default DescriptionSection;