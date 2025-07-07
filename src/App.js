import React, { useState, useEffect } from 'react';
import MainProductDisplay from './components/MainProductDisplay';
import CharacteristicsSection from './components/CharacteristicsSection';
import DescriptionSection from './components/DescriptionSection';
import ProductDetailsHeader from './components/ProductDetailsHeader';
import SellerBlock from './components/SellerBlock';
import ProductActions from './components/ProductActions';
import './styles/index.css';

function App() {
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = process.env.NODE_ENV === 'production'
        ? 'http://backend:8080/api/products/1'
        : 'http://localhost:8080/api/products/1';

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProductData(data);
            } catch (e) {
                console.error("Error fetching product data:", e);
                setError("Falló la carga de datos del producto. Por favor, asegúrate de que el backend esté funcionando. Error: " + e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [API_URL]);

    if (loading) {
        return <div className="product-page-container">Cargando producto...</div>;
    }

    if (error) {
        return <div className="product-page-container alert alert-danger">Error: {error}</div>;
    }

    if (!productData) {
        return <div className="product-page-container alert alert-info">No se encontraron datos del producto.</div>;
    }

    const {
        name,
        description,
        price,
        originalPrice,
        discountPercentage,
        images,
        colors,
        sellerInfo,
        characteristics,
        comments,
        totalReviews
    } = productData;

    return (
        <div className="App">
            <div className="container product-page-container">
                <div className="row main-product-area">
                    <div className="col-lg-6 col-md-12 image-gallery-section">
                        <MainProductDisplay
                            name={name}
                            price={price}
                            originalPrice={originalPrice}
                            discountPercentage={discountPercentage}
                            descriptionShort={description.short}
                            images={images}
                            colors={colors}
                            comments={comments}
                            totalReviews={totalReviews}
                        />
                    </div>

                    <div className="col-lg-6 col-md-12 product-info-section">
                        <ProductDetailsHeader
                            name={name}
                            price={price}
                            originalPrice={originalPrice}
                            discountPercentage={discountPercentage}
                            descriptionShort={description.short}
                            colors={colors}
                            comments={comments}
                            totalReviews={totalReviews}
                        />
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 offset-lg-8 action-seller-sidebar mt-4">
                    <SellerBlock sellerInfo={sellerInfo} />
                    <ProductActions price={price} />
                </div>

                <div className="col-12">
                    <CharacteristicsSection characteristics={characteristics} />
                </div>

                <div className="col-12">
                    <DescriptionSection fullDescription={description.full} />
                </div>

            </div>
        </div>
    );
}

export default App;