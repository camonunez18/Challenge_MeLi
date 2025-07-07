import React from 'react';

const ProductActions = ({ price }) => {
    return (
        <div className="product-actions-block">
            <button className="btn btn-primary btn-lg w-100 mb-2">Añadir al carrito</button> 
            <button className="btn btn-success btn-lg w-100">Comprar ahora</button>
            <p className="text-muted small mt-3 text-center">
                Precio: US$ {price.toFixed(2)}
            </p>
        </div>
    );
};

export default ProductActions;