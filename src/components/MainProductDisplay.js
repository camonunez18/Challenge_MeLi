import React, { useState } from 'react';

const MainProductDisplay = ({ name, images }) => {
    const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : 'https://via.placeholder.com/400x400?text=No+Image');

    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    return (
        <>
            <div className="main-image-display">
                <img src={mainImage} alt={name} className="img-fluid" />
            </div>
            <div className="thumbnail-gallery">
                {images && images.map((imgUrl, index) => (
                    <img
                        key={index}
                        src={imgUrl}
                        alt={`${name} miniatura ${index + 1}`}
                        className={`img-thumbnail ${imgUrl === mainImage ? 'selected' : ''}`} 
                        onClick={() => handleThumbnailClick(imgUrl)}
                    />
                ))}
            </div>
        </>
    );
};

export default MainProductDisplay;