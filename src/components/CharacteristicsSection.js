import React from 'react';

const CharacteristicsSection = ({ characteristics }) => {
    if (!characteristics || characteristics.length === 0) return null;

    const getIcon = (name) => {
        switch (name.toLowerCase()) {
            case 'tamaño de la pantalla': return '📱';
            case 'memoria ram': return '💾';
            case 'memoria interna': return '💽';
            case 'cámara principal': return '📸';
            case 'cámara frontal': return '🤳';
            case 'batería': return '🔋';
            case 'desbloqueo': return '🔓';
            case 'con nfc': return '💳';
            default: return '✔️';
        }
    };

    return (
        <div className="product-section characteristics-section">
            <h2 className="product-section-title">Características del producto</h2>
            <div className="characteristics-grid">
                {characteristics.map((char, index) => (
                    <div key={index} className="characteristic-item">
                        <span className="characteristic-icon">{getIcon(char.name)}</span>
                        <div className="characteristic-text">
                            <strong className="d-block">{char.name}</strong>
                            <span>{char.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacteristicsSection;