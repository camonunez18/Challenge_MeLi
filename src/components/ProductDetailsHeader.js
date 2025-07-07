import React, { useState } from 'react';

const ProductDetailsHeader = ({
                                  name,
                                  price,
                                  originalPrice,
                                  discountPercentage,
                                  descriptionShort,
                                  colors,
                                  comments,
                                  totalReviews
                              }) => {
    const [selectedColor, setSelectedColor] = useState(colors && colors.length > 0 ? colors[0].name : '');

    const averageRating = comments && comments.length > 0
        ? (comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length).toFixed(1)
        : 'N/A';

    return (
        <div className="product-info-header">
            <h1 className="mb-2">{name}</h1>

            <div className="text-muted small mb-3">
                {totalReviews > 0 ? (
                    <>
                        <span style={{ color: '#f3da35' }}>⭐ {averageRating} ({totalReviews} Reseñas)</span>
                    </>
                ) : (
                    <span>Sin reseñas aún.</span>
                )}
            </div>

            <div className="product-price-block pb-3 mb-3 border-bottom">
                {originalPrice && originalPrice > price && (
                    <span className="original-price me-2">US$ {originalPrice.toFixed(2)}</span>
                )}
                <span className="current-price">US$ {price.toFixed(2)}</span>
                {discountPercentage && discountPercentage > 0 && (
                    <span className="discount-tag">{discountPercentage}% OFF</span>
                )}
            </div>

            <p className="product-description-short text-muted mb-3">
                {descriptionShort}
            </p>

            <div className="key-features mb-4">
                <ul className="list-unstyled">
                    <li>✔️ Memoria interna de 256 GB</li>
                    <li>✔️ RAM de 8 GB</li>
                    <li>✔️ Pantalla de 6.6"</li>
                    <li>✔️ Cámara principal de 50 MP</li>
                </ul>
            </div>

            {colors && colors.length > 0 && (
                <div className="color-options mb-3">
                    <span className="fw-bold me-2">Color: {selectedColor}</span>
                    <div className="d-flex mt-2">
                        {colors.map(color => (
                            <div
                                key={color.code}
                                className={`color-swatch ${selectedColor === color.name ? 'selected' : ''}`}
                                style={{ backgroundColor: color.hexCode }}
                                title={color.name}
                                onClick={() => setSelectedColor(color.name)}
                            ></div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailsHeader;