import React, { useState } from 'react';

const MainProductDisplay = ({ name, images }) => {
    const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : 'https://placehold.co/600x400/e0e0e0/000000?text=No+Image');

    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    return (
        <>
            <div className="main-image-display">
                <img
                    src={mainImage}
                    alt={name || "Producto"}
                    className="img-fluid"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e0e0e0/000000?text=Error+Loading+Image'; }}
                />
            </div>

            <div className="thumbnail-gallery">
                {images && images.map((imgUrl, index) => (
                    <img
                        key={index}
                        src={imgUrl}
                        alt={`${name || "Producto"} miniatura ${index + 1}`}
                        className={`img-thumbnail ${imgUrl === mainImage ? 'selected' : ''}`}
                        onClick={() => handleThumbnailClick(imgUrl)}
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/cccccc/000000?text=Thumb'; }}
                    />
                ))}
            </div>
        </>
    );
};

export default MainProductDisplay;
