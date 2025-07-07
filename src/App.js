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

    const API_BASE_URL = 'http://localhost:8080/api';

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/products/1`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProductData(data);
                setLoading(false);
            } catch (e) {
                console.error("Error fetching product data:", e);
                setError("Failed to load product data. Please ensure the backend is running. Error: " + e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    if (loading) {
        return (
            <div className="App d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="ms-3">Loading product...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="App container py-5">
                <div className="alert alert-danger text-center" role="alert">
                    <h4 className="alert-heading">Error loading product!</h4>
                    <p>{error}</p>
                    <hr />
                    <p className="mb-0">Please check the backend connection.</p>
                </div>
            </div>
        );
    }

    if (!productData) {
        return (
            <div className="App container py-5">
                <div className="alert alert-info text-center" role="alert">
                    No product data found.
                </div>
            </div>
        );
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
            <div className="container product-page-container py-4"> {/* Added vertical padding */}
                <div className="row main-product-area mb-4"> {/* Bottom margin to separate sections */}
                    <div className="col-lg-6 col-md-12 image-gallery-section">
                        <MainProductDisplay
                            name={name}
                            price={price}
                            originalPrice={originalPrice}
                            discountPercentage={discountPercentage}
                            descriptionShort={description.short}
                            images={images}
                            colors={colors} // Ensure MainProductDisplay uses colors for image selection if applicable
                            comments={comments}
                            totalReviews={totalReviews}
                        />
                    </div>

                    <div className="col-lg-6 col-md-12 product-info-sidebar">
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

                        <SellerBlock sellerInfo={sellerInfo} />

                        <ProductActions price={price} />
                    </div>
                </div>

                <div className="row characteristics-section mb-4">
                    <div className="col-12">
                        <CharacteristicsSection characteristics={characteristics} />
                    </div>
                </div>

                <div className="row description-section mb-4">
                    <div className="col-12">
                        <DescriptionSection fullDescription={description.full} />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default App;
